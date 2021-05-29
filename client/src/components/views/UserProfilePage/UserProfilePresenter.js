import React from "react";
import { Row, Col, Card, Avatar, Divider, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AvatarWrapper, CardNameWrapper, CardName } from "./UserProfileStyle";
const { TabPane } = Tabs;

const cardBodyStyle = {
  maxWidth: "350px",
  margin: "0px auto",
};

const cardAvatarStyle = {
  width: "100px",
  height: "100px",
  lineHeight: "100px",
  fontSize: "50px",
};

function UserProfilePresenter({ match }) {
  const userName = match.params.userName;

  return (
    <>
      {/* Card(Left) */}
      <Row gutter={24}>
        <Col xs={24} md={7}>
          <Card style={{ border: "none" }} bodyStyle={cardBodyStyle}>
            <Row>
              <Col xs={10} md={24}>
                <AvatarWrapper>
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    style={cardAvatarStyle}
                    icon={<UserOutlined />}
                  />
                </AvatarWrapper>
              </Col>
              <Col xs={14} md={24} style={{ display: "flex" }}>
                <CardNameWrapper>
                  <CardName>{userName}</CardName>
                  <Link
                    to={`/users/${userName}`}
                    style={{ textAlign: "center" }}
                  >
                    @{userName}
                  </Link>
                </CardNameWrapper>
              </Col>
            </Row>
            <Divider style={{ margin: "12px 0px" }} />
          </Card>
        </Col>
        {/* Tabs(Right) */}
        <Col xs={24} md={17}>
          <Tabs
            defaultActiveKey="1"
            style={{ background: "rgb(255, 255, 255)", padding: "0px 20px" }}
          >
            <TabPane tab="Cheers" key="1">
              {/* Content of Tab Pane 1 */}
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}

export default UserProfilePresenter;
