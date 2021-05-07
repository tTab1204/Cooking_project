import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

function Loading() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "300px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoadingOutlined style={{ fontSize: "100px" }} />
      </div>
    </>
  );
}

export default Loading;
