import React from "react";
import { Row, Col, Button, Typography } from "antd";
const { Title, Paragraph } = Typography;
function MiddleBox() {
  return (
    <>
      <Row className="middle-box" style={{ width: "85%", margin: "3rem auto" }}>
        <Col xs={24} md={24}>
          <Title level={2}>Our Story</Title>
          <Paragraph style={{ fontSize: "16px" }}>
            Following his childhood dream of becoming a chef, Michael began
            hosting his own pop-ups at Yume Wo Katare. This grew into an idea to
            support anyone, from home cooks to professional chefs, to host their
            own pop-ups at local restaurants.
          </Paragraph>
          <Button>Read More</Button>
        </Col>
      </Row>
    </>
  );
}

export default MiddleBox;
