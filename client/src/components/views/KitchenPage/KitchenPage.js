import React, { useState, useEffect } from "react";
import { Typography, Tag } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import {
  EnvironmentFilled,
  DollarCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import Loading from "../../Loading";

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
} from "../EventPage/EventPageStyle";

const { Title } = Typography;
const removeLinkColor = { color: "inherit", textDecoration: "none" };
const spanStyle = {
  fontWeight: "bold",
  fontSize: "12px",
  color: "rgba(0, 0, 0, 0.85)",
  paddingRight: "10px",
};

function KitchenPage() {
  const LOCAL_API = "http://localhost:5000";
  const [Kitchens, setKitchens] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    Axios.get("/api/kitchens/showKitchens").then((response) => {
      if (response.data.success) {
        setKitchens(response.data.kitchens);
        setloading(false);
      } else {
        alert("kitchens 정보를 가져오는데 실패하였습니다.");
      }
    });
  }, []);

  const renderKitchen = Kitchens.map((kitchen, index) => (
    <Link to={`/kitchens/${kitchen._id}`} style={removeLinkColor} key={index}>
      <EventCard className="card">
        <RemainDayBox>
          <RemainDay>
            {" "}
            <UserOutlined /> {kitchen.capacity}명{" "}
          </RemainDay>
        </RemainDayBox>
        <CardCover src={`${LOCAL_API}/${kitchen.images[0]}`}></CardCover>
        {/* Hover Effect */}
        {/* <div className="info">
        <h2>Show Event!</h2>
      </div> */}
        {/* -------------- */}
        <CardBody>
          <div style={{ width: "100%" }}>
            <CardTitle>
              {kitchen.name}{" "}
              <Tag color="purple" style={{ marginLeft: "5px" }}>
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
                color: "var(--primary-color2)",
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
  ));

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <Title level={1}>Kitchens</Title>
          <WholeCardContainer>
            <WholeCardWrapper>{renderKitchen}</WholeCardWrapper>
          </WholeCardContainer>
        </>
      )}
    </>
  );
}

export default KitchenPage;
