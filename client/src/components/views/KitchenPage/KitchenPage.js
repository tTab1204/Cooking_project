import React, { useState, useEffect } from "react";
import { Card, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import { EnvironmentOutlined, TeamOutlined } from "@ant-design/icons";
import Loading from "../../Loading";
const { Title } = Typography;

const removeLinkColor = { color: "inherit", textDecoration: "none" };
const spanStyle = {
  fontWeight: "bold",
  fontSize: "12px",
  color: "rgba(0, 0, 0, 0.85)",
  paddingRight: "10px",
};

function KitchenPage() {
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
    <Col
      xl={8}
      sm={12}
      xs={24}
      key={index}
      className="gutter-row"
      style={{ padding: "16px" }}
    >
      <Link to={`/kitchens/${kitchen._id}`} style={removeLinkColor}>
        <Card
          hoverable={true}
          style={{ border: "none" }}
          cover={
            <img
              alt="kitchen"
              src={`http://localhost:5000/${kitchen.images[0]}`}
            />
          }
        >
          <Row>
            <span style={spanStyle}>
              <span style={{ marginRight: "5px" }}>
                <EnvironmentOutlined />
              </span>
              <span>{kitchen.address}</span>
            </span>
            <span style={spanStyle}>
              <span style={{ marginRight: "5px" }}>
                <TeamOutlined />
              </span>
              <span>{kitchen.capacity}</span>
            </span>
          </Row>
          <Row style={{ paddingTop: "10px" }}>
            <Title level={2} style={{ marginBottom: "0px" }}>
              {kitchen.name}
            </Title>
          </Row>
        </Card>
      </Link>
    </Col>
  ));

  return (
    <>
      <div className="main_box">
        {loading && <Loading />}

        <Title level={1}>Kitchens</Title>
        <Row gutter={[32, 32]} type="flex">
          {!loading && renderKitchen}
        </Row>
      </div>
    </>
  );
}

export default KitchenPage;
