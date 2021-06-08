import React from "react";
import { Statistic, Tooltip } from "antd";
import { LikeOutlined, LikeFilled, DislikeOutlined } from "@ant-design/icons";
import { LikeBox } from "./LikesStyle";
const LikesPresenter = ({ Likes, Dislikes, onLike, onDislike, Liked }) => {
  return (
    <>
      <LikeBox>
        <Statistic
          title="Likes"
          prefix={[
            Liked ? (
              <Tooltip title="좋아요" key="comment-basic-like">
                {" "}
                <LikeFilled
                  style={{ cursor: "pointer" }}
                  onClick={onLike}
                />{" "}
              </Tooltip>
            ) : (
              <Tooltip title="좋아요" key="comment-basic-like">
                <LikeOutlined style={{ cursor: "pointer" }} onClick={onLike} />
              </Tooltip>
            ),
          ]}
          value={Likes}
        />
      </LikeBox>
      {}
    </>
  );
};

export default LikesPresenter;
