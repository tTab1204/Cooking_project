import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Tag, Input } from "antd";
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
import SearchBox from "./Sections/SearchBox";

const { Title } = Typography;

const removeLinkColor = { color: "inherit", textDecoration: "none" };

function EventPage() {
  const LOCAL_API = "http://localhost:5000";
  const [Events, setEvents] = useState([]);
  const [loading, setloading] = useState(true);
  const [SearchTerm, setSearchTerm] = useState("");

  const showEvents = async (body) => {
    try {
      const response = await Axios.post("/api/events/show-events", body);
      setEvents(response.data.events);
      setloading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const updateSearchTerm = (newSearchTerm) => {
    let body = {
      searchTerm: newSearchTerm,
    };

    setSearchTerm(newSearchTerm);
    showEvents(body);
  };

  useEffect(() => {
    showEvents();
  }, []);

  const renderEvent = Events.map((event, index) => (
    <Link to={`/events/${event._id}`} style={removeLinkColor} key={index}>
      <EventCard className="card">
        <RemainDayBox>
          <RemainDay>D-2</RemainDay>
        </RemainDayBox>
        <CardCover src={`${LOCAL_API}/${event.images[0]}`}></CardCover>
        {/* Hover Effect */}
        <div className="info">
          <h2>Show Event!</h2>
        </div>
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
            <EnvironmentFilled style={{ marginRight: "5px" }} /> {event.time},{" "}
            {event.location}
          </CardText>
          <PriceAndTagBox>
            <DollarCircleFilled
              style={{
                marginRight: "5px",
                color: "var(--primary-color3)",
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
          <Row style={{ display: "flex" }}>
            <Col>
              <Title level={1}>Events</Title>
            </Col>
            {/* 검색 필터링 기능 */}
            <Col>
              <SearchBox refreshFunction={updateSearchTerm} />
            </Col>
          </Row>

          <WholeCardContainer>
            <WholeCardWrapper>{renderEvent}</WholeCardWrapper>
          </WholeCardContainer>
        </>
      )}
    </>
  );
}

export default EventPage;
