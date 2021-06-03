import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Divider,
  Descriptions,
  Button,
  Modal,
  Avatar,
} from "antd";
import {
  CardBody,
  InnerCardBody,
  CardSection,
  CardMenu,
  CardImageStyle,
  BottomButtonBox,
  ModalContentWrapper,
  InnerModalBox,
  ModalImage,
  LeftDirectionBox,
  RightDirectionBox,
  MainImgWrapper,
  MenuImageWrapper,
  DescriptionContentContainer,
  DescriptionContentWrapper,
  DescriptionFollowers,
} from "./EventDetailStyle";
import "./EventDetailStyle.css";
import { Link } from "react-router-dom";
import { RightOutlined, LeftOutlined, UserOutlined } from "@ant-design/icons";
import { LOCAL_SERVER, HOST_SERVER } from "../../Config";

const { Title, Paragraph } = Typography;

// ---------------------------- CSS-in-JS --------------------------- //
const colStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
};

const cardBodyStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const mainImgStyle = {
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

const menuDescriptionStyle = {
  whiteSpace: "pre-wrap", //연속 공백은 그대로 유지됩니다. 행(行)의 줄 바꿈은 행의 박스를 채우기 위해 필요한 경우에 실행합니다.
  wordBreak: "break-word", // 글이 길어질 때 줄바꿈을 어떻게 해야 하는지 보여주는 속성, 이 경우에선 단어별로 줄바꿈
  lineHeight: "1.5", // line-height값은 상속을 고려하여 단위를 빼고 쓰자. (줄 간격 나타내는 속성)
};

const bottomButtonStyle = {
  width: "100%",
  margin: "0px auto",
  marginTop: "20px",
  maxWidth: "552px",
  display: "block",
  transition: "width 0.2s ease-in-out 0s",
  boxShadow: "0.2s ease-in-out 0s",
};

// ----------------------------------------------------------------------//

function EventDetailPresenter({
  DetailEvent,
  addToCartHandler,
  // FollowersNumber,
}) {
  // Modal
  const [, setImage] = useState("");
  const [CurrentSlide, setCurrentSlide] = useState(0);
  const [ShowModal, setShowModal] = useState(false);

  const handleModalOpen = (targetedImage, i) => {
    setShowModal(true);
    setImage(targetedImage);
    setCurrentSlide(i);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  // Image Slider
  const nextSlide = () => {
    // 더 이상 넘어갈 슬라이드가 없다면 처음으로 돌아오도록 만들기
    if (CurrentSlide >= images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(CurrentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (CurrentSlide === 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(CurrentSlide - 1);
    }
  };

  const { images, name, host, description, time, location, writer } =
    DetailEvent;

  return (
    <>
      {images && writer && (
        <div>
          <Row type="flex">
            <Col sm={24} md={14} style={colStyle}>
              <div style={{ width: "100%" }}>
                <Row type="flex">
                  <Col span={24}>
                    <Card
                      hoverable={true}
                      bodyStyle={{ padding: "0" }}
                      cover={
                        <MainImgWrapper>
                          <img
                            alt="Event_main"
                            src={`${LOCAL_SERVER}${images[0]}`}
                            style={mainImgStyle}
                            onClick={() => handleModalOpen(images[0], 0)}
                          />
                        </MainImgWrapper>
                      }
                    ></Card>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={24} md={10}>
              <Card style={{ height: "100%" }} bodyStyle={cardBodyStyle}>
                <Title level={3}>{name}</Title>
                <Divider style={{ margin: "16px 0px" }} />
                <Descriptions column={1} colon={false}>
                  {/* 나중에 리팩토링 - 컴포넌트로 묶어버리자. */}
                  {/* Host*/}
                  <Descriptions.Item
                    label="Host"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 3fr",
                    }}
                  >
                    <DescriptionContentContainer>
                      <DescriptionContentWrapper>
                        <Link to={`${HOST_SERVER}/${host._id}`}>
                          {host.name}
                        </Link>
                        <DescriptionFollowers>
                          <UserOutlined
                            style={{
                              color: "var(--primary-color3)",
                              marginRight: "4px",
                            }}
                          />{" "}
                          <Typography
                            style={{
                              whiteSpace: "nowrap",
                            }}
                          >
                            4.8 (150)
                          </Typography>
                        </DescriptionFollowers>
                      </DescriptionContentWrapper>
                      <Avatar
                        size="large"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        style={{ width: "40px", height: "40px" }}
                      />
                    </DescriptionContentContainer>
                  </Descriptions.Item>
                  {/* Time */}
                  <Descriptions.Item
                    label="Time"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 3fr",
                    }}
                  >
                    <DescriptionContentContainer>
                      <DescriptionContentWrapper>
                        {DetailEvent.time}
                      </DescriptionContentWrapper>
                    </DescriptionContentContainer>
                  </Descriptions.Item>
                  {/* Location */}
                  <Descriptions.Item
                    label="Location"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 3fr",
                    }}
                  >
                    <DescriptionContentContainer>
                      <DescriptionContentWrapper>
                        {DetailEvent.location}
                        <br />
                        <a
                          target="_blank"
                          href="https://www.google.com/maps/place/NAVER/@37.3538874,127.1014005,17z/data=!3m1!4b1!4m5!3m4!1s0x357b59b81a8b3727:0xf4082515883c699a!8m2!3d37.3538874!4d127.1035892"
                        >
                          View Map
                        </a>
                      </DescriptionContentWrapper>
                    </DescriptionContentContainer>
                  </Descriptions.Item>
                </Descriptions>
                <Divider />
                <Typography style={{ whiteSpace: "pre-wrap" }}>
                  {DetailEvent.description}
                </Typography>
              </Card>
            </Col>
          </Row>
          <Divider />
          <div>
            <Title level={3}>Menu</Title>
            <Row gutter={[16, 16]}>
              {images.map((image, index) => (
                <Col xs={24} sm={12} style={{ padding: "8px" }} key={index}>
                  {/* styled component 적용 */}
                  <CardBody>
                    <InnerCardBody>
                      <CardSection>
                        <CardMenu>DIY Ramen</CardMenu>
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
                                  <MenuImageWrapper>
                                    <CardImageStyle
                                      alt="example"
                                      src={`${LOCAL_SERVER}${image}`}
                                      onClick={() =>
                                        handleModalOpen(image, index)
                                      }
                                    />
                                  </MenuImageWrapper>
                                }
                              ></Card>
                            </Col>
                          </Row>
                        </div>
                      </section>
                    </InnerCardBody>
                    {/* <MenuFooter>
                      <Tag style={tagStyle}>0/40 remaining</Tag>
                      <Button type="primary" disabled>
                        여기다 뭘 넣을까...
                      </Button>
                    </MenuFooter> */}
                  </CardBody>
                </Col>
              ))}
            </Row>
          </div>
          <BottomButtonBox>
            <Button
              style={bottomButtonStyle}
              type="primary"
              size="large"
              onClick={addToCartHandler}
            >
              장바구니에 담기
            </Button>
          </BottomButtonBox>
          {/* Image Modal */}
          <Modal
            style={{
              paddingBottom: "0px",
              maxWidth: "80vw",
              minWidth: "80vw",
              width: "auto",
              transformOrigin: "249.159px 183.727px",
            }}
            bodyStyle={{
              padding: "0px",
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            visible={ShowModal}
            onCancel={handleCancel}
            footer={null}
          >
            <ModalContentWrapper>
              <InnerModalBox>
                <ModalImage
                  alt="example"
                  src={`${LOCAL_SERVER}${images[CurrentSlide]}`}
                />
              </InnerModalBox>
              <LeftDirectionBox>
                <LeftOutlined
                  style={{
                    background: " rgba(255, 255, 255, 0.3)",
                    border: "none",
                    fontSize: "25px",
                    padding: "8px",
                  }}
                  onClick={prevSlide}
                />
              </LeftDirectionBox>
              <RightDirectionBox>
                <RightOutlined
                  style={{
                    background: " rgba(255, 255, 255, 0.3)",
                    border: "none",
                    fontSize: "25px",
                    padding: "8px",
                  }}
                  onClick={nextSlide}
                />
              </RightDirectionBox>
            </ModalContentWrapper>
          </Modal>
        </div>
      )}
    </>
  );
}

export default EventDetailPresenter;
