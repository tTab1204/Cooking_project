import React from 'react';
import { Statistic, Tooltip, Icon } from 'antd';
import { LikeOutlined, LikeFilled, DislikeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
const LikesPresenter = ({
  Likes,
  Dislikes,
  DisLiked,
  onLike,
  onDislike,
  Liked,
  reviewId,
}) => {
  return (
    <>
      {!reviewId && (
        <LikeBox>
          <Statistic
            title="Likes"
            prefix={[
              Liked ? (
                <Tooltip title="좋아요" key="comment-basic-like">
                  {' '}
                  <LikeFilled
                    style={{ cursor: 'pointer' }}
                    onClick={onLike}
                  />{' '}
                </Tooltip>
              ) : (
                <Tooltip title="좋아요" key="comment-basic-like">
                  <LikeOutlined
                    style={{ cursor: 'pointer' }}
                    onClick={onLike}
                  />
                </Tooltip>
              ),
            ]}
            value={Likes}
          />
        </LikeBox>
      )}
      {reviewId && (
        <div>
          <span key="comment-basic-like">
            <Tooltip title="좋아요">
              <Icon
                type="like"
                theme={Liked ? 'filled' : 'outlined'}
                onClick={onLike}
              />
            </Tooltip>
            <span style={{ paddingLeft: '6px', cursor: 'auto' }}>{Likes}</span>
          </span>
          <span key="comment-basic-dislike" style={{ marginLeft: '8px' }}>
            <Tooltip title="싫어요">
              <Icon
                type="dislike"
                theme={DisLiked ? 'filled' : 'outlined'}
                onClick={onDislike}
              />
            </Tooltip>

            <span style={{ paddingLeft: '6px', cursor: 'auto' }}>
              {Dislikes}
            </span>
          </span>
          &nbsp;&nbsp;
        </div>
      )}
    </>
  );
};

const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;

export default LikesPresenter;
