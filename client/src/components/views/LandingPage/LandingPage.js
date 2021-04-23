import React from "react";
import BottomBox from "./Sections/BottomBox";
import MiddleBox from "./Sections/MiddleBox";
import { Row, Col } from "antd";

function LandingPage() {
  return (
    <div>
      <Row
        className="top-box-panels"
        style={{ height: "95vh", margin: "3rem auto" }}
      >
        <Col
          xs={24}
          md={8}
          style={{ backgroundColor: "#ffecb8", height: "100%" }}
        ></Col>
        <Col
          xs={24}
          md={8}
          style={{ backgroundColor: "#f6a6b2", height: "100%" }}
        ></Col>
        <Col
          xs={24}
          md={8}
          style={{ backgroundColor: "#b7ded2", height: "100%" }}
        ></Col>
      </Row>

      {/* MiddleBox */}
      <MiddleBox />

      {/* BottomBox */}
      <BottomBox />
    </div>
  );
}

export default LandingPage;
