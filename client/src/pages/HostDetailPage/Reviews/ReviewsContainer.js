import React, { useState } from 'react';
import Axios from 'axios';
import ReviewsPresenter from './ReviewsPresenter';
import { REVIEW_SERVER } from 'utils/config';
import { useSelector } from 'react-redux';

function ReviewsContainer({
  hostId,
  reviewList,
  refreshFunction,
  showReviews,
}) {
  const userId = useSelector(state => state.user.userData?.userId);
  console.log('userId: ', userId);

  const [ReviewValue, setReviewValue] = useState('');

  const handleClick = e => {
    setReviewValue(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    let variables = {
      writer: userId,
      hostId: hostId,
      content: ReviewValue,
    };

    try {
      const response = await Axios.post(
        `${REVIEW_SERVER}/save-review`,
        variables,
      );
      setReviewValue('');
      refreshFunction(response.data.review);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <ReviewsPresenter
        hostId={hostId}
        reviewList={reviewList}
        refreshFunction={refreshFunction}
        showReviews={showReviews}
        handleClick={handleClick}
        onSubmit={onSubmit}
        ReviewValue={ReviewValue}
      />
    </>
  );
}

export default ReviewsContainer;
