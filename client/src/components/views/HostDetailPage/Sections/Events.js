import React from "react";
import { Col, Card, Row } from "antd";
const { Meta } = Card;

function Events() {
  // 따로 Host인 사람들은 Event Upload 페이지를 만들어야겠다!

  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={[16, 16]}>
          <Col lg={8} md={12} xs={24}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col lg={8} md={12} xs={24}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col lg={8} md={12} xs={24}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Events;
