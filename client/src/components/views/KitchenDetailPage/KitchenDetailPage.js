import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Typography,
  Divider,
  Button,
  Descriptions,
  Card,
  message,
  Result,
} from "antd";
import Axios from "axios";
import { EnvironmentOutlined, TeamOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";
import Loading from "../../Loading";

const { Title, Paragraph } = Typography;

// --------------- style --------------------//
// ------------------------------------------//
const breadCrumb_style = {
  background: `linear-gradient(to bottom, rgba(0,0,0,0)
                  39%, rgba(0,0,0,0)
                  41%, rgba(0,0,0,0.65)
                  100%),
                  url(''), #1c1c1c`,
  height: "400px",
  backgroundSize: "cover",
  backgroundPosition: "center, center",
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  paddingLeft: "24px",
  paddingRight: "24px",
};
const spanStyle = {
  fontWeight: "bold",
  fontSize: "12px",
  color: "rgba(0, 0, 0, 0.85)",
  paddingRight: "10px",
};
const imageStyle = {
  minWidth: "auto",
  width: "auto",
  border: "none",
};

const priceStyle = {
  border: "1px solid rgb(221, 221, 221)",
  padding: "16px",
  width: "100%",
  flexDirection: "column",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
};

const smallPriceStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  marginTop: "10px",
};

const buttonStyle = {
  fontWeight: "bold",
  marginTop: "20px",
  width: "90%",
};
// ------------------------------------------- //
// ------------------------------------------- //

function KitchenDetailPage({ match }) {
  const kitchenId = match.params.kitchensId;
  const [loading, setloading] = useState(true);
  const [DetailKitchen, setDetailKitchen] = useState({});
  const [ShowSuccess, setShowSuccess] = useState(false);
  const {
    images,
    name,
    address,
    capacity,
    description,
    rent_price,
  } = DetailKitchen;

  useEffect(() => {
    Axios.get(`/api/kitchens/kitchens_by_id?id=${kitchenId}&type=single`)
      .then((response) => {
        setDetailKitchen(response.data.kitchen[0]);
        setloading(false);
      })
      .catch((err) => alert(err));
  }, []);

  const successMessage = () => {
    const key = "updatable";
    message.loading({ content: "Loading...", key });

    setTimeout(() => {
      message.success({
        content: "Success!",
        key,
        duration: 2,
      });
      setShowSuccess(true);
    }, 2000);
  };

  const onSubmit = () => {
    successMessage();
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && images && (
        <div style={breadCrumb_style}>
          <Title level={1} style={{ color: "white" }}></Title>
        </div>
      )}
      {!loading && (
        <div className="main_box">
          <Row gutter={[12]}>
            <Col xs={24} sm={24} md={16}>
              <div>
                <span style={spanStyle}>
                  <span style={{ marginRight: "4px" }}>
                    <EnvironmentOutlined />
                  </span>
                  <span>{address}</span>
                </span>
                <span style={spanStyle}>
                  <span style={{ marginRight: "4px" }}>
                    <TeamOutlined />
                  </span>
                  <span>{capacity}</span>
                </span>
                <Title level={1} style={{ margin: "5px 0px" }}>
                  {name}
                </Title>
              </div>
              <Divider />
              <Paragraph>{description}</Paragraph>
              <Divider />
              <Descriptions title="address">
                <Descriptions.Item>{address}</Descriptions.Item>
              </Descriptions>
              <Divider />
              {/* Images */}
              <Title level={2}>Images</Title>
              <div style={{ width: "100%" }}>
                <Row gutter={[8, 8]}>
                  {images &&
                    images.map((image, index) => (
                      <Col
                        key={index}
                        className="gutter-row"
                        lg={6}
                        md={12}
                        sm={24}
                      >
                        <Card
                          hoverable={true}
                          style={imageStyle}
                          cover={
                            <img
                              alt="kitchen-detail-images"
                              src={`http://localhost:5000/${image}`}
                            />
                          }
                        ></Card>
                      </Col>
                    ))}
                </Row>
              </div>
            </Col>
            <Col span={8}>
              <div style={priceStyle}>
                {ShowSuccess && (
                  <Result
                    status="success"
                    title="Successfully send the information"
                    subTitle="The answer will come soon."
                  />
                )}

                {!ShowSuccess && (
                  <Row gutter={[12]}>
                    <Col md={24} xl={24}>
                      <Title level={4}>Full Rental</Title>
                    </Col>
                    <Col md={24} xl={24} style={smallPriceStyle}>
                      {rent_price}원 / 일
                    </Col>
                    <Button
                      type="primary"
                      size="large"
                      style={buttonStyle}
                      onClick={onSubmit}
                    >
                      Contact
                    </Button>
                  </Row>
                )}
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default KitchenDetailPage;
