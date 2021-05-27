import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Card, Avatar, Divider, Statistic } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import Follow from "../HostDetailPage/Sections/Follow";
import Loading from "../../Loading";
import China from "../../Images/china.png";
import Korea from "../../Images/south-korea.png";
import japan from "../../Images/japan.png";
import {
  HostCardContainer,
  HostCardWrapper,
  HostCarouselCard,
  HostCardIcon,
  HostCardP,
  FollowAndRatingsBox,
  FollowBox,
  LikeBox,
} from "./Sections/HostPageStyle";

const { Title } = Typography;

const removeLinkColor = { color: "inherit", textDecoration: "none" };

const FOOD_NATION = {
  Korean: (
    <img src={Korea} style={{ maxWidth: "20px", marginLeft: "5px" }} alt="KR" />
  ),
  Japan: (
    <img src={japan} style={{ maxWidth: "20px", marginLeft: "5px" }} alt="JP" />
  ),
  Chinese: (
    <img src={China} style={{ maxWidth: "20px", marginLeft: "5px" }} alt="CN" />
  ),
};

function HostPage({ match }) {
  const LOCAL_API = "http://localhost:5000";

  const [Hosts, setHosts] = useState([]);

  useEffect(() => {
    Axios.get("/api/hosts/showHosts").then((response) => {
      if (response.data.success) {
        setHosts(response.data.hosts);
      } else {
        alert("호스트 정보를 가져오는데 실패하였습니다.");
      }
    });
  }, []);

  const renderHosts = Hosts.map((host, index) => (
    <Link to={`/hosts/${host._id}`} style={removeLinkColor}>
      <HostCarouselCard>
        <HostCardIcon src={`${LOCAL_API}/${host.image}`} />

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
            url={match.url}
          />
        </Row>
        <Row style={{ paddingTop: "10px" }}>
          <HostCardP>{host.description}</HostCardP>
        </Row>
      </HostCarouselCard>
    </Link>
  ));

  return (
    <>
      {Hosts.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Title level={1}>Hosts</Title>
          <HostCardContainer>
            <HostCardWrapper>{renderHosts}</HostCardWrapper>
          </HostCardContainer>
        </>
      )}
    </>
  );
}

export default HostPage;
