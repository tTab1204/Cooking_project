import React, { useState, useEffect } from "react";
import { Comment, Avatar, Button, Input, Form, Rate, Tooltip } from "antd";
import LikeDislikes from "./LikeDislikes";
import Axios from "axios";
import moment from "moment";
const { TextArea } = Input;

function SingleReview({ hostId, review, refreshFunction, showReviews }) {
  const API_REIVEWS = "/api/reviews";
  const API_RATINGS = "/api/ratings";

  const userId = localStorage.getItem("userId");

  const [ReviewValue, setReviewValue] = useState("");
  const [OpenReply, setOpenReply] = useState(false);
  const [OpenCorrect, setOpenCorrect] = useState(false);

  const onHandleChange = (e) => {
    setReviewValue(e.target.value);
  };

  const onClickReplyOpen = () => {
    setOpenReply(!OpenReply);
  };

  const closeCorrectHandler = () => {
    if (userId === review.writer._id) {
      setOpenCorrect(!OpenCorrect);
      setReviewValue("");
    }
  };

  // 댓글 작성 기능
  const onSubmit = async (e) => {
    e.preventDefault();

    const variables = {
      content: ReviewValue,
      writer: userId,
      hostId: hostId,
      responseTo: review._id,
    };

    try {
      const response = await Axios.post(
        `${API_REIVEWS}/save-review`,
        variables
      );

      setReviewValue("");
      setOpenReply(false);
      refreshFunction(response.data.review);
    } catch (e) {
      console.error(e);
    }
  };

  // 평점 정보 가져오기
  const showRatingsDetail = async () => {
    const variables = {
      userFrom: localStorage.getItem("userId"),
      hostId: hostId,
    };

    try {
      const response = await Axios.post(
        `${API_RATINGS}/show-ratings`,
        variables
      );
      // console.log(response.data.rateInfo);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    showRatingsDetail();
  }, []);

  // 댓글 수정 기능
  const onCorrect = async (e) => {
    e.preventDefault();

    let confirmRes = window.confirm("댓글 수정을 완료하시겠습니까?");

    if (confirmRes) {
      let variables = {
        reviewId: review._id,
        content: ReviewValue,
        hostId: hostId,
      };

      try {
        const response = await Axios.post(
          "/api/reviews/correct-review",
          variables
        );
        setReviewValue("");
        showReviews(hostId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // 댓글삭제 기능
  const deleteHandler = async (targetedReviewId) => {
    if (userId === review.writer._id) {
      let confirmRes = window.confirm("정말 이 글을 삭제하시길 원하시나요 ?");

      if (confirmRes) {
        let variables = {
          hostId: hostId,
          reviewId: targetedReviewId,
        };

        try {
          const response = await Axios.post(
            "/api/reviews/delete-review",
            variables
          );
          console.log(response.data.deletedId);
          showReviews(hostId);
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  const actions = [
    <LikeDislikes />,
    <span onClick={onClickReplyOpen} key="comment-basic-reply-to">
      답글
    </span>,
    // 조건문 두번 쓰기 싫었는데 왜 한번으로는 안 되는지 모르겠다.
    review.writer && userId === review.writer._id && (
      <span onClick={closeCorrectHandler}>수정</span>
    ),
    review.writer && userId === review.writer._id && (
      <span onClick={() => deleteHandler(review._id)}>삭제</span>
    ),

    // <Rate disabled defaultValue={2} />,
  ];

  return (
    <>
      {review.writer && (
        <Comment
          actions={actions}
          author={review.writer.name}
          avatar={<Avatar src={review.writer.image} alt="true" />}
          content={<p>{review.content}</p>}
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      )}

      {/* 답글 보여주는 Handler */}
      {OpenReply && (
        <Form style={{ display: "flex" }} onSubmit={onSubmit}>
          <TextArea
            style={{ width: "100%", borderRadius: "5px" }}
            onChange={onHandleChange}
            value={ReviewValue}
            placeholder="Please write down your reply"
          />
          <br />
          <Button style={{ width: "20%", height: "52px" }} onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      )}

      {OpenCorrect && (
        <Form style={{ display: "flex" }} onSubmit={onCorrect}>
          <TextArea
            style={{ width: "100%", borderRadius: "5px" }}
            onChange={onHandleChange}
            value={ReviewValue}
            placeholder="댓글을 수정해주세요."
          />
          <br />
          <Button
            style={{ width: "10%", height: "52px" }}
            onClick={closeCorrectHandler}
          >
            취소
          </Button>
          <Button style={{ width: "10%", height: "52px" }} onClick={onCorrect}>
            수정
          </Button>
        </Form>
      )}
    </>
  );
}

export default SingleReview;
