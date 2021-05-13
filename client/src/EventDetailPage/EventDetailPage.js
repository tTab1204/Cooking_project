import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Row, Col, Card, Typography, Divider, Descriptions } from "antd";
const { Title } = Typography;

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

function EventDetailPage({ match }) {
  const LOCAL_SERVER = "http://localhost:5000/";
  const eventId = match.params.eventId;

  const [DetailEvent, setDetailEvent] = useState({});

  useEffect(() => {
    Axios.get(`/api/events/events_by_id?id=${eventId}&type=single`)
      .then((response) => {
        setDetailEvent(response.data.event[0]);
      })
      .catch((err) => alert(err));
  }, []);

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
              <Col
                xs={24}
                sm={12}
                style={{ padding: "8px", border: "1px solid black" }}
              >
                <div></div>
              </Col>
              <Col>
                <div></div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}

export default EventDetailPage;
