import React, { useState } from 'react';
import { Comment, Avatar, Button, Input, Form, Tooltip } from 'antd';
import LikesContainer from '../../Likes/LikesContainer';
import moment from 'moment';

const { TextArea } = Input;

function SingleReviewPresenter({
  userId,
  review,
  ReviewValue,
  OpenReply,
  OpenCorrect,
  onHandleChange,
  onClickReplyOpen,
  closeCorrectHandler,
  onSubmit,
  onCorrect,
  deleteHandler,
}) {
  return (
    <>
      {review.writer && (
        <Comment
          actions={[
            <LikesContainer userId={localStorage.getItem('userId')} reviewId={review._id} />,
            <span onClick={onClickReplyOpen} key='comment-basic-reply-to'>
              답글
            </span>,
            review.writer && userId === review.writer._id && <span onClick={closeCorrectHandler}>수정</span>,
            review.writer && userId === review.writer._id && (
              <span onClick={() => deleteHandler(review._id)}>삭제</span>
            ),
          ]}
          author={review.writer.name}
          avatar={<Avatar src={review.writer.image} alt='true' />}
          content={<p>{review.content}</p>}
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      )}

      {/* 답글 보여주는 Handler */}
      {OpenReply && (
        <Form style={{ display: 'flex' }} onSubmit={onSubmit}>
          <TextArea
            style={{ width: '100%', borderRadius: '5px' }}
            onChange={onHandleChange}
            value={ReviewValue}
            placeholder='Please write down your reply'
          />
          <br />
          <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      )}

      {OpenCorrect && (
        <Form style={{ display: 'flex' }} onSubmit={onCorrect}>
          <TextArea
            style={{ width: '100%', borderRadius: '5px' }}
            onChange={onHandleChange}
            value={ReviewValue}
            placeholder='댓글을 수정해주세요.'
          />
          <br />
          <Button style={{ width: '10%', height: '52px' }} onClick={closeCorrectHandler}>
            취소
          </Button>
          <Button style={{ width: '10%', height: '52px' }} onClick={onCorrect}>
            수정
          </Button>
        </Form>
      )}
    </>
  );
}

export default SingleReviewPresenter;
