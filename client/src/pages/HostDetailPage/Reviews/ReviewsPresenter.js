import React from "react";
import { Form, Input, Button } from "antd";
import SingleReviewContainer from "./SingleReview/SingleReviewContainer";
import ReplyReviewContainer from "./ReplyReview/ReplyReviewContainer";

const { TextArea } = Input;

function ReviewsContainer({
  hostId,
  reviewList,
  refreshFunction,
  showReviews,
  handleClick,
  onSubmit,
  ReviewValue,
}) {
  return (
    <>
      {/* Root Review Form */}

      <Form style={{ display: "flex" }} onSubmit={onSubmit}>
        <TextArea
          style={{ width: "100%", borderRadius: "5px" }}
          onChange={handleClick}
          value={ReviewValue}
          placeholder="Please write down your review"
        />
        <br />
        <Button style={{ width: "20%", height: "52px" }} onClick={onSubmit}>
          Submit
        </Button>
        <br />
      </Form>

      {/* Review List */}
      {reviewList &&
        reviewList
          .map(
            (review, index) =>
              !review.responseTo && (
                <div key={index}>
                  <SingleReviewContainer
                    refreshFunction={refreshFunction}
                    reviewList={reviewList}
                    review={review}
                    hostId={hostId}
                    showReviews={showReviews}
                  />
                  <ReplyReviewContainer
                    refreshFunction={refreshFunction}
                    hostId={hostId}
                    parentReviewId={review._id}
                    reviewList={reviewList}
                    showReviews={showReviews}
                  />
                </div>
              )
          )
          .reverse()}
    </>
  );
}

export default ReviewsContainer;
