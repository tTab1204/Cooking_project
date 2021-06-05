import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import Axios from "axios";
import SingleReview from "./SingleReview";
import ReplyReview from "./ReplyReview";

const { TextArea } = Input;

function Reviews({
  hostId,
  reviewList,
  refreshFunction,
  showReviews,
  onLoadMore,
  pageEnd,
}) {
  const [ReviewValue, setReviewValue] = useState("");

  // 개선할 부분 - 나중에 api요청하는거 다 한 군데 모아서 export해주자
  const API_REIVEWS = "/api/reviews";

  const handleClick = (e) => {
    setReviewValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let variables = {
      writer: localStorage.getItem("userId"),
      hostId: hostId,
      content: ReviewValue,
    };

    try {
      const response = await Axios.post(
        `${API_REIVEWS}/save-review`,
        variables
      );
      setReviewValue("");
      refreshFunction(response.data.review);
    } catch (e) {
      console.error(e);
    }
  };

  // const handleScroll = () => {
  //   const scrollHeight = document.documentElement.scrollHeight;

  //   const scrollTop = document.documentElement.scrollTop;

  //   const clientHeight = document.documentElement.clientHeight;

  //   if (!Fetching && scrollTop + clientHeight >= scrollHeight) fetchMoreData();
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

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
        reviewList.map(
          (review, index) =>
            !review.responseTo && (
              <div key={index}>
                <SingleReview
                  refreshFunction={refreshFunction}
                  review={review}
                  hostId={hostId}
                  showReviews={showReviews}
                />
                <ReplyReview
                  refreshFunction={refreshFunction}
                  hostId={hostId}
                  parentReviewId={review._id}
                  reviewList={reviewList}
                  showReviews={showReviews}
                />
              </div>
            )
        )}
    </>
  );
}
{
  /* 최신순으로 정렬하기 위해 reverse() 사용 */
}
{
  /* 추후에 좋아요가 높은 순서대로 정렬하는 기능 필요 */
}
export default Reviews;
