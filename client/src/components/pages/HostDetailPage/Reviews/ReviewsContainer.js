import React, { useState } from "react";
import Axios from "axios";
import ReviewsPresenter from "./ReviewsPresenter";
import { REVIEW_SERVER } from "../../../Config";
function ReviewsContainer({
  hostId,
  reviewList,
  refreshFunction,
  showReviews,
}) {
  const [ReviewValue, setReviewValue] = useState("");

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
        `${REVIEW_SERVER}/save-review`,
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
