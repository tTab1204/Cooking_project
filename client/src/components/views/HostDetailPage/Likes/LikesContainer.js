import React from "react";
import { Statistic } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { LikeBox } from "./LikesStyle";

const LikesContainer = () => {
  return (
    <>
      <LikeBox>
        <Statistic title="Likes" prefix={<LikeOutlined />} value={1} />
      </LikeBox>
    </>
  );
};

export default LikesContainer;
