import React from "react";
import FollowPresenter from "../Follow/FollowPresenter";
import { Row, Col, Card, Avatar, Typography, Divider } from "antd";
import {
  CardAvatarStyle,
  NationBox,
  TitleAndNationBox,
  FollowAndLikeBox,
} from "./HostCardStyle";
import China from "../../../Images/china.png";
import Korea from "../../../Images/south-korea.png";
import japan from "../../../Images/japan.png";

const { Title } = Typography;

const FOOD_NATION = {
  Korean: <img src={Korea} style={{ maxWidth: "20px" }} alt="KR" />,
  Japan: <img src={japan} style={{ maxWidth: "20px" }} alt="JP" />,
  Chinese: <img src={China} style={{ maxWidth: "20px" }} alt="CN" />,
};

function HostCardPresenter({ detail, url, userId }) {
  const { name, image, food_nation } = detail;

  return (
    <>
      <Col className="gutter-row" xs={24} md={7}>
        <Card
          hoverable={false}
          bordered={true}
          bodyStyle={{ maxWidth: "350px", margin: "0px auto" }}
        >
          <Row>
            <Col xs={10} md={24}>
              <CardAvatarStyle>
                <Avatar
                  style={{
                    borderRadius: "50%",
                    minWidth: "150px",
                    height: "150px",
                  }}
                  src={`http://localhost:5000/${image[0]}`}
                  alt="host-main-image"
                />
              </CardAvatarStyle>
            </Col>
            <Col xs={14} md={24}>
              <TitleAndNationBox style={{ marginTop: "20px" }}>
                <Title level={2} style={{ marginBottom: "0px" }}>
                  {name}
                </Title>
                <NationBox>{FOOD_NATION[food_nation]}</NationBox>
              </TitleAndNationBox>
            </Col>
          </Row>

          <Divider />
          {/* Follow and Like */}

          <FollowAndLikeBox>
            <FollowPresenter userFrom={userId} detail={detail} url={url} />
          </FollowAndLikeBox>
        </Card>
      </Col>
    </>
  );
}

export default HostCardPresenter;
