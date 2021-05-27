import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Typography, Tag } from "antd";
import { Link } from "react-router-dom";
import {
  EventCard,
  RemainDayBox,
  RemainDay,
  CardBody,
  CardCover,
  CardTitle,
  CardText,
  PriceAndTagBox,
  WholeCardContainer,
  WholeCardWrapper,
} from "../../EventPage/EventPageStyle";
import { DollarCircleFilled, EnvironmentFilled } from "@ant-design/icons";
import Loading from "../../../Loading";

const removeLinkColor = { color: "inherit", textDecoration: "none" };

function Events({ hostId }) {
  const API_EVENTS = "/api/events";
  const variable = { host: hostId };

  const [HostEvents, setHostEvents] = useState([]);
  const [loading, setloading] = useState(true);

  const LOCAL_API = "http://localhost:5000";

  const showHostEvent = async () => {
    try {
      const response = await Axios.post(
        `${API_EVENTS}/show-host-events`,
        variable
      );
      // console.log(response.data);
      setHostEvents(response.data.events);
      setloading(false);
    } catch {
      console.error();
    }
  };

  useEffect(() => {
    showHostEvent();
  }, []);

  const renderHostEvents = HostEvents.map((event, index) => (
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
              <Tag color="geekblue" style={{ marginLeft: "5px" }}>
                Popular
              </Tag>
            </CardTitle>
          </div>
          <CardText>
            <EnvironmentFilled style={{ marginRight: "5px" }} /> {event.time} ,{" "}
            {event.location}
          </CardText>
          <PriceAndTagBox>
            <DollarCircleFilled
              style={{
                marginRight: "5px",
                color: "var(--primary-color3)",
              }}
            />
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
        <WholeCardContainer host="true">
          <WholeCardWrapper host="true">{renderHostEvents}</WholeCardWrapper>
        </WholeCardContainer>
      )}
    </>
  );
}

export default Events;
