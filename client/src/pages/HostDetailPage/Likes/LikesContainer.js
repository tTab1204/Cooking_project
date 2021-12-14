import React, { useState, useEffect } from 'react';
import LikesPresenter from './LikesPresenter';
import Axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const LikesContainer = ({ detail, reviewId }) => {
  const userId = useSelector(state => state.userData?.userId);

  const [Likes, setLikes] = useState(0);
  const [Liked, setLiked] = useState(false);
  const [Dislikes, setDislikes] = useState(0);
  const [DisLiked, setDisLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  let variables = {};

  if (detail) {
    variables = {
      hostId: detail._id,
      userId: userId,
    };
  } else {
    variables = {
      reviewId: reviewId,
      userId: userId,
    };
  }

  useEffect(() => {
    Axios.post('/api/like/number-of-likes', variables).then(response => {
      if (response.data.success) {
        setLikes(response.data.likes.length);
      } else {
        alert('좋아요 갯수를 받아오지 못했습니다.');
      }
    });

    Axios.post('/api/like/number-of-dislikes', variables).then(response => {
      if (response.data.success) {
        setDislikes(response.data.dislikes.length);
      } else {
        alert('싫어요 갯수를 받아오지 못했습니다.');
      }
    });

    Axios.post('/api/like/liked', variables).then(response => {
      if (response.data.success) {
        setLiked(response.data.liked);
      } else alert('정보를 가져오는 데 실패했습니다.');
    });

    Axios.post('/api/like/disliked', variables).then(response => {
      if (response.data.success) {
        setDisLiked(response.data.disliked);
      } else alert('정보를 가져오는 데 실패했습니다.');
    });
    setLoading(false);
  }, []);

  const onLike = () => {
    if (!Liked) {
      Axios.post('/api/like/up-like', variables).then(response => {
        if (response.data.success) {
          setLikes(Likes + 1);
          setLiked(!Liked);

          if (DisLiked) {
            setDisLiked(!DisLiked);
            setDislikes(Dislikes - 1);
          }
        } else {
          alert('Like를 올리지 못하였습니다.');
        }
      });
    } else {
      Axios.post('/api/like/un-like', variables).then(response => {
        if (response.data.success) {
          setLikes(Likes - 1);
          setLiked(!Liked);
        } else {
          alert('Like를 내리지 못하였습니다.');
        }
      });
    }
  };

  const onDislike = () => {
    if (!DisLiked) {
      Axios.post('/api/like/up-dislike', variables).then(response => {
        if (response.data.success) {
          setDislikes(Dislikes + 1);
          setDisLiked(!DisLiked);

          if (Liked) {
            setLiked(!Liked);
            setLikes(Likes - 1);
          }
        } else {
          alert('Dislike를 올리지 못하였습니다.');
        }
      });
    } else {
      Axios.post('/api/like/un-dislike', variables).then(response => {
        if (response.data.success) {
          setDislikes(Dislikes - 1);
          setDisLiked(!DisLiked);
        } else {
          alert('Dislike를 내리지 못하였습니다.');
        }
      });
    }
  };

  return (
    <>
      {loading && <LoadingOutlined style={{ fontSize: '10px' }} />}
      {!loading && (
        <LikesPresenter
          Likes={Likes}
          Dislikes={Dislikes}
          onLike={onLike}
          onDislike={onDislike}
          Liked={Liked}
          DisLiked={DisLiked}
          reviewId={reviewId}
        />
      )}
    </>
  );
};

export default LikesContainer;
