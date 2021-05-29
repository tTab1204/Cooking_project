import React from "react";
import { Typography, Tag } from "antd";
import { Link } from "react-router-dom";
import {
  EnvironmentFilled,
  DollarCircleFilled,
  UserOutlined,
} from "@ant-design/icons";

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
} from "./KitchenStyle";
import { LOCAL_SERVER } from "../../Config";

const { Title } = Typography;
const removeLinkColor = { color: "inherit", textDecoration: "none" };

function KitchenPresenter({ Kitchens }) {
  return (
    <>
      <Title level={1}>Kitchens</Title>
      <WholeCardContainer>
        <WholeCardWrapper>
          {Kitchens.map((kitchen, index) => (
            <Link
              to={`/kitchens/${kitchen._id}`}
              style={removeLinkColor}
              key={index}
            >
              <EventCard className="card">
                <RemainDayBox>
                  <RemainDay>
                    {" "}
                    <UserOutlined /> {kitchen.capacity}명{" "}
                  </RemainDay>
                </RemainDayBox>
                <CardCover
                  src={`${LOCAL_SERVER}${kitchen.images[0]}`}
                ></CardCover>
                {/* Hover Effect */}
                <div className="info-kitchen">
                  <h2>Show Kitchen!</h2>
                </div>
                {/* -------------- */}
                <CardBody>
                  <div style={{ width: "100%" }}>
                    <CardTitle>
                      {kitchen.name}{" "}
                      <Tag color="geekblue" style={{ marginLeft: "5px" }}>
                        Popular
                      </Tag>
                    </CardTitle>
                  </div>
                  <CardText>
                    <EnvironmentFilled style={{ marginRight: "5px" }} />{" "}
                    {kitchen.address}, {kitchen.capacity}
                  </CardText>
                  <PriceAndTagBox>
                    <DollarCircleFilled
                      style={{
                        marginRight: "5px",
                        color: "var(--primary-color3)",
                      }}
                    />
                    {kitchen.rent_price}{" "}
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

export default KitchenPresenter;
