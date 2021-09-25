import React, { useState, useEffect } from "react";
import ReplyReivewPresenter from "./ReplyReviewPresenter";

function ReplyReviewContainer({
  hostId,
  refreshFunction,
  reviewList,
  showReviews,
  parentReviewId,
}) {
  const [ChildReviewNumber, setChildReviewNumber] = useState(0);
  const [OpenReplyReviews, setOpenReplyReviews] = useState(false);

  useEffect(() => {
    let reviewNumber = 0;

    reviewList.map((review) => {
      if (review.responseTo === parentReviewId) reviewNumber++;
    });
    setChildReviewNumber(reviewNumber);
  }, [reviewList]);

  const onHandleChange = () => {
    setOpenReplyReviews(!OpenReplyReviews);
  };

  return (
    <>
      <ReplyReivewPresenter
        hostId={hostId}
        refreshFunction={refreshFunction}
        reviewList={reviewList}
        showReviews={showReviews}
        parentReviewId={parentReviewId}
        ChildReviewNumber={ChildReviewNumber}
        OpenReplyReviews={OpenReplyReviews}
        onHandleChange={onHandleChange}
      />
    </>
  );
}

export default ReplyReviewContainer;
