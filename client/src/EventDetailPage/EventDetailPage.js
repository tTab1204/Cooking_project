import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Row,
  Col,
  Card,
  Typography,
  Divider,
  Descriptions,
  Tag,
  Button,
  message,
} from "antd";
import {
  CardBody,
  InnerCardBody,
  CardSection,
  Menu,
  CardImageStyle,
  MenuFooter,
} from "../styles/EventDetailStyle";
import { useDispatch } from "react-redux";
import { addToCart } from "../_actions/user_actions";

const { Title, Paragraph } = Typography;

// import ImageSlider from "../components/utils/ImageSlider";

const first_boxStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
};

const second_boxStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const cardStyle = {
  minWidth: "200px",
  width: "100%",
  height: "100%",
  position: "relative",
  paddingTop: "75%",
  display: "flex",
  border: "none",
};

const imgStyle = {
  objectFit: "cover",
  height: "100%",
  width: "100%",
  position: "absolute",
  top: "0px",
  right: "0px",
};

const descriptionStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
};

const tagStyle = {
  margin: "auto 0px",
};

const cardImageWrapper = {
  minWidth: "200px",
  width: "100%",
  height: "100%",
  position: "relative",
  paddingTop: "75%",
  display: "flex",
};

const menuDescriptionStyle = {
  whiteSpace: "pre-wrap", //연속 공백은 그대로 유지됩니다. 행(行)의 줄 바꿈은 행의 박스를 채우기 위해 필요한 경우에 실행합니다.
  wordBreak: "break-word", // 글이 길어질 때 줄바꿈을 어떻게 해야 하는지 보여주는 속성, 이 경우에선 단어별로 줄바꿈
  lineHeight: "1.5", // line-height값은 상속을 고려하여 단위를 빼고 쓰자. (줄 간격 나타내는 속성)
};

function EventDetailPage({ match }) {
  const LOCAL_SERVER = "http://localhost:5000/";
  const eventId = match.params.eventId;
  const dispatch = useDispatch();

  const [DetailEvent, setDetailEvent] = useState({});
  const [ShowSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    Axios.get(`/api/events/events_by_id?id=${eventId}&type=single`)
      .then((response) => {
        setDetailEvent(response.data.event[0]);
      })
      .catch((err) => alert(err));
  }, []);

  const successMessage = () => {
    const key = "updatable";
    message.loading({ content: "Loading...", key });

    setTimeout(() => {
      message.success({
        content: "Success!",
        key,
        duration: 2,
      });
      setShowSuccess(true);
    }, 2000);
  };

  const addToCartHandler = async (e) => {
    try {
      const response = await dispatch(addToCart(eventId));
      // console.log(response);
      successMessage();
    } catch {
      console.error(e);
    }
  };

  const { images, name, description, time, location, writer } = DetailEvent;

  return (
    <>
      {images && writer && (
        <div className="main_box">
          <Row type="flex">
            <Col sm={24} md={14} style={first_boxStyle}>
              <div style={{ width: "100%" }}>
                <Row type="flex">
                  <Col span={24}>
                    <Card
                      hoverable={true}
                      bodyStyle={{ padding: "0" }}
                      cover={
                        <div style={cardStyle}>
                          <img
                            alt="Event_main"
                            src={`${LOCAL_SERVER}${images[0]}`}
                            style={imgStyle}
                          />
                        </div>
                      }
                    ></Card>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={24} md={10}>
              <Card style={{ height: "100%" }} bodyStyle={second_boxStyle}>
                <Title level={3}>{name}</Title>
                <Divider />
                <Descriptions>
                  <Descriptions.Item
                    span={1}
                    style={descriptionStyle}
                    label="Host"
                  >
                    MuYaho
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
          </Row>
          <Divider />
          <div className="app">
            <Title level={3}>Menu</Title>
            <Row gutter={[16, 16]}>
              {/* 반복 시작되는 부분 */}
              {images.map((image) => (
                <Col xs={24} sm={12} style={{ padding: "8px" }}>
                  {/* styled component 적용 */}
                  <CardBody>
                    <InnerCardBody>
                      <CardSection>
                        <Menu>DIY Ramen</Menu>
                        <span style={{ marginBottom: "16px" }}>16000 (원)</span>
                        <Paragraph
                          type="secondary"
                          style={menuDescriptionStyle}
                        >
                          Make Yume at Home
                        </Paragraph>
                      </CardSection>
                      <section style={{ marginBottom: "8px" }}>
                        <div style={{ width: "100%" }}>
                          <Row>
                            <Col span={24}>
                              <Card
                                hoverable={true}
                                bodyStyle={{ padding: "0px" }}
                                cover={
                                  <div style={cardImageWrapper}>
                                    <CardImageStyle
                                      alt="example"
                                      src={`${LOCAL_SERVER}${image}`}
                                    />
                                  </div>
                                }
                              ></Card>
                            </Col>
                          </Row>
                        </div>
                      </section>
                    </InnerCardBody>
                    <MenuFooter>
                      <Tag style={tagStyle}>0/40 remaining</Tag>
                      <Button type="primary" onClick={addToCartHandler}>
                        Add To Cart
                      </Button>
                    </MenuFooter>
                  </CardBody>
                </Col>
              ))}

              {/* 반복 끝나는 부분 */}
            </Row>
          </div>
        </div>
      )}
    </>
  );
}
// border: "1px solid black"

export default EventDetailPage;
