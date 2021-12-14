import React, { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import Axios from 'axios';
import FollowPresenter from './FollowPresenter';
import { useSelector } from 'react-redux';

function FollowContainer({ detail, url, followers }) {
  const userFrom = useSelector(state => state.userData?.userId);

  const [loading, setloading] = useState(true);
  const [FollowNumber, setFollowNumber] = useState(followers);
  const [Followed, setFollowed] = useState(false);

  const variables = {
    userFrom: userFrom,
    hostId: detail._id,
    hostName: detail.name,
  };

  const onClickFollow = () => {
    if (Followed) {
      Axios.post('/api/follow/removeFollow', variables).then(response => {
        if (response.data.success) {
          setFollowNumber(FollowNumber - 1);
          setFollowed(!Followed);
        } else {
          alert('Follow 리스트에서 지우는걸 실패했습니다.');
        }
      });
    } else {
      Axios.post('/api/follow/addFollow', variables).then(response => {
        if (response.data.success) {
          setFollowNumber(FollowNumber + 1);
          setFollowed(!Followed);
        } else {
          alert('Follow 리스트에서 추가하는데에 실패했습니다.');
        }
      });
    }
  };

  useEffect(() => {
    let mounted = true;

    Axios.post('/api/follow/follow-number', variables).then(response => {
      setFollowNumber(response.data.followNumber);
      setloading(false);
    });
    Axios.post('/api/follow/followed', variables).then(response => {
      if (response.data.success) {
        setFollowed(response.data.followed);
        setloading(false);
      } else alert('정보를 가져오는 데 실패했습니다.');
    });
    setloading(false);
    return () => (mounted = false);
  }, []);

  return (
    <>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LoadingOutlined style={{ fontSize: '10px' }} />
        </div>
      )}

      <FollowPresenter
        userFrom={userFrom}
        detail={detail}
        FollowNumber={FollowNumber}
        Followed={Followed}
        url={url}
        onClickFollow={onClickFollow}
      />
    </>
  );
}

export default FollowContainer;
