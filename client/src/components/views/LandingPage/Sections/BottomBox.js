import React from "react";
import { Row, Col, Card, Avatar, Button, Typography } from "antd";
const { Title, Paragraph } = Typography;
function BottomBox() {
  return (
    <div
      style={{
        backgroundColor: "lightgray",
      }}
    >
      <Row
        className="bottom-box"
        style={{ width: "85%", margin: "3rem auto", textAlign: "center" }}
      >
        <Title level={2}>Our Mission</Title>

        <Col xs={24} md={8} className="info-container">
          <Title level={4}>For Eaters</Title>
          <Paragraph>
            Find unique food experiences and support local chefs.
          </Paragraph>
        </Col>
        <Col xs={24} md={8} className="info-container">
          <Title level={4}> For Chefs</Title>
          <Paragraph>
            Find unique food experiences and support local chefs.
          </Paragraph>
        </Col>
        <Col xs={24} md={8} className="info-container">
          <Title level={4}>For Restaurants</Title>
          <Paragraph>
            Find unique food experiences and support local chefs.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
}

export default BottomBox;
