import React from "react";
import SingleReviewContainer from "../SingleReview/SingleReviewContainer";
import ReplyReviewContainer from "./ReplyReviewContainer";

// style
const replyReviewStyle = {
  fontSize: "14px",
  margin: 0,
  color: "#1890ff",
  cursor: "pointer",
};

function ReplyReviewPresenter({
  hostId,
  refreshFunction,
  reviewList,
  showReviews,
  parentReviewId,
  ChildReviewNumber,
  OpenReplyReviews,
  onHandleChange,
}) {
  return (
    <>
      {ChildReviewNumber > 0 && (
        <p style={replyReviewStyle} onClick={onHandleChange}>
          View {ChildReviewNumber} more review(s)
        </p>
      )}

      {OpenReplyReviews &&
        reviewList.map((review, index) => (
          <React.Fragment key={index}>
            {review.responseTo === parentReviewId && (
              <div style={{ width: "80%", marginLeft: "40px" }}>
                <SingleReviewContainer
                  refreshFunction={refreshFunction}
                  reviewList={reviewList}
                  review={review}
                  hostId={hostId}
                  showReviews={showReviews}
                />
                <ReplyReviewContainer
                  refreshFunction={refreshFunction}
                  reviewList={reviewList}
                  hostId={hostId}
                  parentReviewId={review._id}
                  showReviews={showReviews}
                />
              </div>
            )}
          </React.Fragment>
        ))}
    </>
  );
}

export default ReplyReviewPresenter;
