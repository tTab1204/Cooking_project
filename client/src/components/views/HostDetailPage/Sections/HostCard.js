import React from "react";
import Follow from "./Follow";

import { Row, Col, Card, Avatar, Typography, Divider, Button } from "antd";

const { Title } = Typography;

function HostCard(props) {
  return (
    <div>
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
                {props.detail.name}
              </Title>
              <div>
                <img src="" alt="nation" />
              </div>
            </div>
            <Divider />
            {/* Follow and Ratings */}
            <Follow
              userFrom={localStorage.getItem("userId")}
              detail={props.detail}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default HostCard;
