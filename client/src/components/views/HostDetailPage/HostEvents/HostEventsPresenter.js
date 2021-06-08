import React from "react";
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
} from "./HostEventsStyle";
import { DollarCircleFilled, EnvironmentFilled } from "@ant-design/icons";
import { LOCAL_SERVER } from "../../../Config";

const removeLinkColor = { color: "inherit", textDecoration: "none" };

function HostEventsPresenter({ HostEvents }) {
  return (
    <>
      <WholeCardContainer host="true">
        <WholeCardWrapper host="true">
          {HostEvents.map((event, index) => (
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
                <CardBody>
                  <div style={{ width: "100%" }}>
                    <CardTitle>{event.name} </CardTitle>
                  </div>
                  <CardText>
                    <EnvironmentFilled style={{ marginRight: "5px" }} />{" "}
                    {event.time} , {event.location}
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
          ))}
        </WholeCardWrapper>
      </WholeCardContainer>
    </>
  );
}

export default HostEventsPresenter;
