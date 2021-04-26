import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Avatar,
  Typography,
  Divider,
  Statistic,
  Button,
} from "antd";
const { Title } = Typography;

function HostDetailPage(props) {
  const hostsId = props.match.params.hostsId;

  return (
    <div className="app">
      <Row gutter={24}>
        <Col className="gutter-row" xs={24} md={7}>
          <Card hoverable style={{ border: "none" }}>
            <Row>
              <Col xs={10} md={24}>
                <div style={{ textAlign: "center" }}>
                  <Avatar
                    style={{
                      width: "150px",
                      height: "150px",
                    }}
                    src=""
                    alt="host-main-image"
                  />
                </div>
              </Col>
            </Row>
            <div
              style={{
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              <Title level={2} style={{ marginBottom: "0px" }}>
                Hello World
              </Title>
              <div>
                <img src="" alt="nation" />
              </div>
            </div>
            <Divider />
            <Row>
              <div className="host-bottom-card ">
                <div className="host-bottom-card-piece">
                  <Col span={12}>
                    <Statistic title="Followers" value={"336"} />
                  </Col>
                </div>

                <div className="host-bottom-card-piece">
                  <Col span={12}>
                    <Statistic title="Ratings" value={"4.95(180)"} />
                  </Col>
                </div>
              </div>
            </Row>
            <Row style={{ paddingTop: "10px", textAlign: "center" }}>
              <Button style={{ width: "100%" }}>Unfollow</Button>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default HostDetailPage;
