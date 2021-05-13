import React, { useState, useEffect } from "react";
import SingleReview from "./SingleReview";

const replyReviewStyle = {
  fontSize: "14px",
  margin: 0,
  color: "#1890ff",
  cursor: "pointer",
};

function ReplyReview({
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

  const renderReplyReview = (parentReviewId) =>
    // 화살표함수 쓸때는 꼭 return을 해주자, 아니면 중괄호 쓰지 말던가..
    reviewList.map((review, index) => (
      <React.Fragment key={index}>
        {review.responseTo === parentReviewId && (
          <div style={{ width: "80%", marginLeft: "40px" }}>
            <SingleReview
              refreshFunction={refreshFunction}
              review={review}
              hostId={hostId}
              showReviews={showReviews}
            />
            <ReplyReview
              refreshFunction={refreshFunction}
              reviewList={reviewList}
              hostId={hostId}
              parentReviewId={review._id}
              showReviews={showReviews}
            />
          </div>
        )}
      </React.Fragment>
    ));

  const onHandleChange = () => {
    setOpenReplyReviews(!OpenReplyReviews);
  };

  return (
    <>
      {ChildReviewNumber > 0 && (
        <p style={replyReviewStyle} onClick={onHandleChange}>
          View {ChildReviewNumber} more review(s)
        </p>
      )}

      {OpenReplyReviews && renderReplyReview(parentReviewId)}
    </>
  );
}

export default ReplyReview;
