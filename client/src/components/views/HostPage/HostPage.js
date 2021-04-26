import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Card, Avatar, Divider, Statistic } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import { LikeOutlined } from "@ant-design/icons";

const { Title } = Typography;

function HostPage() {
  const [Hosts, setHosts] = useState([]);

  useEffect(() => {
    Axios.get("/api/hosts/showHosts").then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setHosts(response.data.hosts);
      } else {
        alert("호스트 정보를 가져오는데 실패하였습니다.");
      }
    });
  }, []);

  const renderHosts = Hosts.map((host, index) => (
    <Col xl={8} md={12} xs={24} key={index} className="gutter-row">
      <Card hoverable={true} style={{ border: "none" }}>
        <Link to={`/hosts/${host._id}`}>
          <Row type="flex">
            <Col xs={10} md={24}>
              <div style={{ textAlign: "center" }}>
                <Avatar
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                  src={`http://localhost:5000/${host.image[0]}`}
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
                  <img src="" alt="nation" />
                </div>
              </Col>
            </Col>
          </Row>
          <Divider />
          <Row>
            <div className="host-bottom-card ">
              <div className="host-bottom-card-piece">
                <Col span={12}>
                  <Statistic title="Followers" value={"336"} />
                </Col>
              </div>

              <div className="host-bottom-card-piece">
                <Col span={12}>
                  <Statistic title="Ratings" value={"4.95(180)"} />
                </Col>
              </div>
            </div>
          </Row>
          <Row style={{ paddingTop: "10px" }}>{host.description}</Row>
        </Link>
      </Card>
    </Col>
  ));

  return (
    <div className="app">
      <Title level={1}>Hosts</Title>
      <Row gutter={[32, 32]} type="flex">
        {renderHosts}
      </Row>
    </div>
  );
}

export default HostPage;
