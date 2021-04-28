import React, { useState, useEffect } from "react";
import { Comment, Avatar, Button, Input, Rate, Form } from "antd";

const { TextArea } = Input;

function Reviews() {
  const [CommentValue, setCommentValue] = useState("");
  const handleClick = (e) => {
    setCommentValue(e.target.value);
  };

  const actions = [<span>수정</span>, <span>삭제</span>, <Rate />];

  return (
    <>
      {/* 댓글 작성 공간 */}
      <Form>
        <TextArea
          style={{ width: "100%", borderRadius: "5px" }}
          placeholder="댓글을 작성해주세요."
          value={CommentValue}
          onChange={handleClick}
        />
      </Form>

      <Comment
        actions={actions}
        author={"Han Solo"}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="han solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        }
      ></Comment>
    </>
  );
}

export default Reviews;
