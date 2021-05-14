import React, { useState, useEffect } from "react";
import { Card, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import { EnvironmentOutlined, TeamOutlined } from "@ant-design/icons";
import Loading from "../../Loading";
const { Title } = Typography;

const removeLinkColor = { color: "inherit", textDecoration: "none" };
const spanStyle = {
  fontWeight: "bold",
  fontSize: "12px",
  color: "rgba(0, 0, 0, 0.85)",
  paddingRight: "10px",
};

function EventPage() {
  const [Events, setEvents] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    Axios.get("/api/events/show-events").then((response) => {
      if (response.data.success) {
        setEvents(response.data.events);
        setloading(false);
      } else {
        console.error(response.data);
      }
    });
  }, []);

  const renderEvent = Events.map((event, index) => (
    <Col
      xl={8}
      sm={12}
      xs={24}
      key={index}
      className="gutter-row"
      style={{ padding: "16px" }}
    >
      <Link to={`/events/${event._id}`} style={removeLinkColor}>
        <Card
          hoverable={true}
          style={{ border: "none", height: "480px" }}
          cover={
            <img alt="Event" src={`http://localhost:5000/${event.images[0]}`} />
          }
        >
          <Row>
            <span style={spanStyle}>
              <span style={{ marginRight: "5px" }}>
                <EnvironmentOutlined />
              </span>
              <span>{event.time}</span>
            </span>
          </Row>
          <Row style={{ paddingTop: "10px" }}>
            <Title level={2} style={{ marginBottom: "0px", marginTop: "0px" }}>
              {event.name}
            </Title>
          </Row>
          <span style={spanStyle}>
            <span style={{ marginRight: "5px" }}>
              <TeamOutlined />
            </span>
            <span>{event.host.name}</span>
          </span>
        </Card>
      </Link>
    </Col>
  ));

  return (
    <>
      <div className="main_box">
        {loading && <Loading />}

        <Title level={1}>Events</Title>
        <Row gutter={[32, 32]} type="flex">
          {!loading && renderEvent}
        </Row>
      </div>
    </>
  );
}

export default EventPage;
