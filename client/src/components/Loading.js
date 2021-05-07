import React from "react";
import { Spin } from "antd";

function Loading() {
  return (
    <>
      <div className="app">
        <Spin style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Loading...</span>
      </div>
    </>
  );
}

export default Loading;
