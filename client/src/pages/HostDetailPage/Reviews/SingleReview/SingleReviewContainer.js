import React, { useState } from 'react';
import Axios from 'axios';
import SingleReviewPresenter from './SingleReviewPresenter';
import { REVIEW_SERVER } from 'utils/config';

function SingleReviewContainer({
  hostId,
  review,
  refreshFunction,
  showReviews,
}) {
  const userId = localStorage.getItem('userId');

  const [ReviewValue, setReviewValue] = useState('');
  const [OpenReply, setOpenReply] = useState(false);
  const [OpenCorrect, setOpenCorrect] = useState(false);

  const onHandleChange = e => {
    setReviewValue(e.target.value);
  };

  const onClickReplyOpen = () => {
    setOpenReply(!OpenReply);
  };

  const closeCorrectHandler = () => {
    if (userId === review.writer._id) {
      setOpenCorrect(!OpenCorrect);
      setReviewValue('');
    }
  };

  // 댓글 작성 기능
  const onSubmit = async e => {
    e.preventDefault();

    const variables = {
      content: ReviewValue,
      writer: userId,
      hostId: hostId,
      responseTo: review._id,
    };

    try {
      const response = await Axios.post(
        `${REVIEW_SERVER}/save-review`,
        variables,
      );

      setReviewValue('');
      setOpenReply(false);
      refreshFunction(response.data.review);
    } catch (e) {
      console.error(e);
    }
  };

  // 댓글 수정 기능
  const onCorrect = async e => {
    e.preventDefault();

    let confirmRes = window.confirm('댓글 수정을 완료하시겠습니까?');

    if (confirmRes) {
      let variables = {
        reviewId: review._id,
        content: ReviewValue,
        hostId: hostId,
      };

      try {
        const response = await Axios.post(
          '/api/reviews/correct-review',
          variables,
        );
        setReviewValue('');
        setOpenCorrect(false);
        showReviews(hostId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // 댓글 삭제 기능
  const deleteHandler = async targetedReviewId => {
    if (userId === review.writer._id) {
      let confirmRes = window.confirm('정말 이 글을 삭제하시길 원하시나요 ?');

      if (confirmRes) {
        let variables = {
          hostId: hostId,
          reviewId: targetedReviewId,
        };

        try {
          const response = await Axios.post(
            '/api/reviews/delete-review',
            variables,
          );
          console.log(response.data.deletedId);
          showReviews(hostId);
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  return (
    <>
      <SingleReviewPresenter
        userId={userId}
        hostId={hostId}
        review={review}
        refreshFunction={refreshFunction}
        showReviews={showReviews}
        ReviewValue={ReviewValue}
        OpenReply={OpenReply}
        OpenCorrect={OpenCorrect}
        onHandleChange={onHandleChange}
        onClickReplyOpen={onClickReplyOpen}
        closeCorrectHandler={closeCorrectHandler}
        onSubmit={onSubmit}
        onCorrect={onCorrect}
        deleteHandler={deleteHandler}
      />
    </>
  );
}

export default SingleReviewContainer;
