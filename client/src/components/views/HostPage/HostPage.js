import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Card, Avatar, Divider } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import Follow from "../HostDetailPage/Sections/Follow";
import Ratings from "../HostDetailPage/Sections/Ratings";
import Mini_Korea from "../food_nation/mini_korea.png";
import { hostDetailState } from "../../../atoms/atoms";
import { useRecoilValue } from "recoil";

const { Title } = Typography;

const removeLinkColor = { color: "inherit", textDecoration: "none" };

function HostPage({ match }) {
  const [Hosts, setHosts] = useState([]);
  const hostState = useRecoilValue(hostDetailState);

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
    <Col xl={8} md={12} xs={24} key={index} className="gutter-row">
      <Card hoverable={true} style={{ border: "none" }}>
        <Link to={`/hosts/${host._id}`} style={removeLinkColor}>
          <Row type="flex">
            <Col xs={10} md={24}>
              <div style={{ textAlign: "center" }}>
                <Avatar
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                  src={`http://localhost:5000/${host.image}`}
                  alt="host-main-image"
                />
              </div>

              <Col xs={14} md={24}>
                <div
                  style={{
                    paddingTop: "10px",
                    textAlign: "center",
                  }}
                >
                  <Title level={2} style={{ marginBottom: "0px" }}>
                    {host.name}
                  </Title>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={host.food_nation === "Korean" && Mini_Korea}
                    width="50px"
                    height="50px"
                    alt="nation"
                  />
                </div>
              </Col>
            </Col>
          </Row>
          <Divider />
          <Row>
            <div className="host-bottom-card ">
              {/* Follow */}
              <Follow
                userFrom={localStorage.getItem("userId")}
                detail={host}
                url={match.url}
              />

              {/* Ratings */}
              {/* <Ratings /> */}
            </div>
          </Row>
          <Row style={{ paddingTop: "10px" }}>{host.description}</Row>
        </Link>
      </Card>
    </Col>
  ));

  return (
    <div className="app">
      {Hosts.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <Title level={1}>Hosts</Title>
          <Row gutter={[32, 32]} type="flex">
            {renderHosts}
          </Row>
        </div>
      )}
    </div>
  );
}

export default HostPage;
