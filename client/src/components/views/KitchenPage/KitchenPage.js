import React, { useState, useEffect } from "react";
import { Card, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";

const { Title } = Typography;
const { Meta } = Card;
const removeLinkColor = { color: "inherit", textDecoration: "none" };

function KitchenPage() {
  const [Kitchens, setKitchens] = useState([]);

  useEffect(() => {
    Axios.get("/api/kitchens/showKitchens").then((response) => {
      if (response.data.success) {
        setKitchens(response.data.kitchens);
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
      <Card
        hoverable={true}
        style={{ border: "none" }}
        cover={
          <img
            alt="example"
            src={`http://localhost:5000/${kitchen.images[0]}`}
          />
        }
      >
        <Link to={`/kitchens/${kitchen._id}`} style={removeLinkColor}>
          <Row style={{ paddingTop: "10px" }}>
            <Title level={2} style={{ marginBottom: "0px" }}>
              {kitchen.name}
            </Title>
          </Row>
        </Link>
      </Card>
    </Col>
  ));

  return (
    <>
      <div className="main_box">
        <Title level={1}>Kitchen</Title>
        <Row gutter={[32, 32]} type="flex">
          {renderKitchen}
        </Row>
      </div>
    </>
  );
}

export default KitchenPage;
