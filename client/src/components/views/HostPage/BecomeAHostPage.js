import React, { useState } from "react";
import { Alert, Row, Col, Typography, Input, Select, Form, Button } from "antd";
import BottomPages from "./Sections/BottomPages";
import Axios from "axios";
const { Title } = Typography;
const { Option } = Select;



function BecomeAHostPage() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Kitchen_Ex, setKitchen_Ex] = useState("");

  const onNameChange = (e) => {
    // 의문 1: target 대신 currentTarget하면 왜 툭툭 끊기지? - 찾아보기!
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onKitchen_ExChange = (label) => {
    console.log(label.key);
    setKitchen_Ex(label.key);
  };

  const onSubmit = () => {
    const variables = {
      writer: localStorage.getItem("userId"),
      name: Name,
      email: Email,
      kitchen_experience: Kitchen_Ex,
    };

    Axios.post("/api/hosts/become-a-host", variables).then((response) => {
      if (response.data.success) {
        console.log(response.data);
      } else {
        alert("Failed to become a host");
      }
    });
  };

  return (
    <>
      <Row type="flex">
        {/*------------------- Image -----------------------*/}
        <div
          style={{
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
          }}
        >
          <Title level={1} style={{ color: "white" }}>
            Become a Host
          </Title>
        </div>
        {/*--------------------------------------------------*/}

        {/*------------------- Inputs -----------------------*/}
        <Col
          lg={24}
          md={24}
          xs={24}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              maxWidth: "600px",
              paddingLeft: "24px",
              paddingRight: "24px",
              marginRight: "auto",
              marginLeft: "auto",
              display: "flex",
              flexDirection: "column",
              paddingTop: "20px",
            }}
          >
            <Alert
              message="Invite Only"
              description="Currently, we are operating on invite-only. Feel free to leave your contact information to be contacted in the future."
              type="info"
              showIcon
            />
            <Title level={4} style={{ color: "gray", paddingTop: "10px" }}>
              Tell us a little about yourself
            </Title>
            <Form onSubmit={onSubmit}>
              {/* Name */}
              <Input placeholder="Name" size="large" onChange={onNameChange} />
              <br />
              <br />
              {/* Email */}
              <Input
                placeholder="Email"
                size="large"
                onChange={onEmailChange}
              />
              <br />
              <br />

              {/* Select Box */}
              <Select
                labelInValue
                noStyle
                size="large"
                placeholder="Previous industrial kitchen experience"
                onChange={onKitchen_ExChange}
              >
                <Option value="None">None</Option>
                <Option value="Less than a year">Less than a year</Option>
                <Option value="More than a year">More than a year</Option>
              </Select>

              <br />
              <br />

              <Button
                onClick={onSubmit}
                size="large"
                type="primary"
                style={{ width: "100%" }}
              >
                I'm intersted
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      {/*--------------------------------------------------*/}

      {/*-------------------BottomPages-------------------*/}
      <BottomPages />
      {/*--------------------------------------------------*/}
    </>
  );
}

export default React.memo(BecomeAHostPage);
