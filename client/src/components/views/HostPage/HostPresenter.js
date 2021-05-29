import React from "react";
import { Row, Typography, Divider } from "antd";
import { Link } from "react-router-dom";
import Follow from "../HostDetailPage/Sections/Follow";
import {
  HostCardContainer,
  HostCardWrapper,
  HostCarouselCard,
  HostCardIcon,
  HostCardP,
} from "./HostStyle";
import { LOCAL_SERVER } from "../../Config";

const { Title } = Typography;

const removeLinkColor = { color: "inherit", textDecoration: "none" };

function HostPresenter({ Hosts, FOOD_NATION, url }) {
  return (
    <>
      <Title level={1}>Hosts</Title>
      <HostCardContainer>
        <HostCardWrapper>
          {Hosts.map((host, index) => (
            <Link to={`/hosts/${host._id}`} style={removeLinkColor}>
              <HostCarouselCard>
                <HostCardIcon src={`${LOCAL_SERVER}${host.image}`} />

                <Title level={3}>
                  {" "}
                  {host.name}
                  {FOOD_NATION[host.food_nation]}
                </Title>

                <Divider style={{ marginTop: "0" }} />
                <Row style={{ width: "100%" }}>
                  {/* Follow and Likes */}
                  <Follow
                    userFrom={localStorage.getItem("userId")}
                    detail={host}
                    url={url}
                  />
                </Row>
                <Row style={{ paddingTop: "10px" }}>
                  <HostCardP>{host.description}</HostCardP>
                </Row>
              </HostCarouselCard>
            </Link>
          ))}
        </HostCardWrapper>
      </HostCardContainer>
    </>
  );
}

export default HostPresenter;
