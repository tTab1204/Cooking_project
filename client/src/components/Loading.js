import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

function Loading() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "550px",
          justifyContent: "center",
          alignItems: "center",
          // boxShadow: "rgba(0,0,0,0.5) 0 0 0 9999px",
          // zIndex: "100",
          // position: "fixed",
        }}
      >
        <LoadingOutlined
          style={{
            fontSize: "100px",
          }}
        />
      </div>
    </>
  );
}

export default Loading;
