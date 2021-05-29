import React from "react";
import { Row, Col, Typography, Tag, Input } from "antd";
import { Link } from "react-router-dom";
import { DollarCircleFilled, EnvironmentFilled } from "@ant-design/icons";
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
} from "./EventStyle";
import "./EventStyle.css";
import SearchBox from "../../utils/SearchBox";
import { LOCAL_SERVER } from "../../Config";
const { Title } = Typography;

const removeLinkColor = { color: "inherit", textDecoration: "none" };

function EventPresenter({ Events, updateSearchTerm }) {
  return (
    <>
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
          <WholeCardWrapper>
            {Events.map((event, index) => (
              <Link
                to={`/events/${event._id}`}
                style={removeLinkColor}
                key={index}
              >
                <EventCard className="card">
                  <RemainDayBox>
                    <RemainDay>D-2</RemainDay>
                  </RemainDayBox>
                  <CardCover
                    src={`${LOCAL_SERVER}${event.images[0]}`}
                  ></CardCover>
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
                      <EnvironmentFilled style={{ marginRight: "5px" }} />{" "}
                      {event.time}, {event.location}
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
            ))}
          </WholeCardWrapper>
        </WholeCardContainer>
      </>
    </>
  );
}

export default EventPresenter;
