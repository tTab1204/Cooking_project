import React from "react";
import Follow from "./Follow";

import { Row, Col, Card, Avatar, Typography, Divider, Button } from "antd";

const { Title } = Typography;

function HostCard({ detail }) {
  const { name, image } = detail;

  return (
    <>
      <Col className="gutter-row" xs={24} md={7}>
        <Card hoverable bordered={false}>
          <Row>
            <Col xs={10} md={24}>
              <div style={{ textAlign: "center" }}>
                <Avatar
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                  src={`http://localhost:5000/${image}`}
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
              {name}
            </Title>
            <div>
              <img src="" alt="nation" />
            </div>
          </div>
          <Divider />
          {/* Follow and Ratings */}
          <Follow userFrom={localStorage.getItem("userId")} detail={detail} />
        </Card>
      </Col>
    </>
  );
}

export default HostCard;
