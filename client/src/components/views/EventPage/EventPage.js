import React, { useState, useEffect } from "react";
import { Typography, Tag } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import { DollarCircleFilled, EnvironmentFilled } from "@ant-design/icons";
import Loading from "../../Loading";
import {
  WholeCardContainer,
  WholeCardWrapper,
  EventCard,
  CardCover,
  CardBody,
  CardTitle,
  CardText,
  RemainDayBox,
  RemainDay,
  PriceAndTagBox,
} from "./EventPageStyle";
import "./EventPageStyle.css";

const { Title } = Typography;

const removeLinkColor = { color: "inherit", textDecoration: "none" };

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
    <Link to={`/events/${event._id}`} style={removeLinkColor} key={index}>
      <EventCard className="card">
        <RemainDayBox>
          <RemainDay>D-2</RemainDay>
        </RemainDayBox>
        <CardCover src={`${LOCAL_API}/${event.images[0]}`}></CardCover>
        {/* Hover Effect */}
        {/* <div className="info">
          <h2>Show Event!</h2>
        </div> */}
        {/* -------------- */}
        <CardBody>
          <div style={{ width: "100%" }}>
            <CardTitle>
              {event.name}{" "}
              <Tag color="purple" style={{ marginLeft: "5px" }}>
                Popular
              </Tag>
            </CardTitle>
          </div>
          <CardText>
            <EnvironmentFilled style={{ marginRight: "5px" }} /> {event.time},{" "}
            {event.location}
          </CardText>
          <PriceAndTagBox>
            <DollarCircleFilled
              style={{
                marginRight: "5px",
                color: "var(--primary-color2)",
              }}
            />{" "}
            {event.price}{" "}
            <span
              style={{
                fontSize: "0.8rem",
                color: "rgb(67, 67, 67)",
                marginLeft: "2px",
              }}
            >
              원
            </span>
          </PriceAndTagBox>
        </CardBody>
      </EventCard>
    </Link>
  ));

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          <Title level={1}>Events</Title>
          <WholeCardContainer>
            <WholeCardWrapper>{renderEvent}</WholeCardWrapper>
          </WholeCardContainer>
        </>
      )}
    </>
  );
}

export default EventPage;
