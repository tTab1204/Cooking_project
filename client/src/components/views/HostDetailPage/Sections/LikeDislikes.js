import React from "react";
import { Tooltip, Icon } from "antd";

function LikeDislikes() {
  return (
    <div>
      <span key="comment-basic-like">
        <Tooltip title="좋아요">
          <Icon type="like" theme="outlined" />
        </Tooltip>
        <span style={{ paddingLeft: "6px", cursor: "auto" }}>0</span>
      </span>
      <span key="comment-basic-dislike" style={{ marginLeft: "8px" }}>
        <Tooltip title="싫어요">
          <Icon type="dislike" theme="outlined" />
        </Tooltip>
        {/* <span style={{ paddingLeft: "6px", cursor: "auto" }}>싫어요</span> */}
        <span style={{ paddingLeft: "6px", cursor: "auto" }}>0</span>
      </span>
      &nbsp;&nbsp;
    </div>
  );
}

export default LikeDislikes;
