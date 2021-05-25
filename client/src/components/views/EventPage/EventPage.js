import React, { useState, useEffect } from "react";
import { Card, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import { EnvironmentOutlined, TeamOutlined } from "@ant-design/icons";
import Loading from "../../Loading";
import {
  WholeCardContainer,
  WholeCardWrapper,
  EventCard,
  CardCover,
  CardBody,
  CardTitle,
  CardText,
  CardHoverEffect,
} from "./EventPageStyle";
import "./EventPageStyle.css";

const { Title } = Typography;

const removeLinkColor = { color: "inherit", textDecoration: "none" };
const spanStyle = {
  fontWeight: "bold",
  fontSize: "12px",
  color: "rgba(0, 0, 0, 0.85)",
  paddingRight: "10px",
};

function EventPage() {
  const LOCAL_API = "http://localhost:5000";
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
    <Link to={`/events/${event._id}`} style={removeLinkColor}>
      <EventCard className="card">
        <CardCover src={`${LOCAL_API}/${event.images[0]}`}></CardCover>
        <div class="info">
          <h2>Show Event!</h2>
        </div>
        <CardBody>
          <div style={{ width: "100%" }}>
            <CardTitle>{event.name}</CardTitle>
          </div>
          <CardText>{event.location}</CardText>
        </CardBody>
      </EventCard>
    </Link>
  ));

  return (
    <>
      {loading && <Loading />}

      <Title level={1}>Events</Title>
      <WholeCardContainer>
        <WholeCardWrapper>{!loading && renderEvent}</WholeCardWrapper>
      </WholeCardContainer>
    </>
  );
}

export default EventPage;
