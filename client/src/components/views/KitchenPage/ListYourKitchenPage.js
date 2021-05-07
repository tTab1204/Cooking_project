import React, { useState } from "react";
import {
  Alert,
  Row,
  Col,
  Typography,
  Input,
  Select,
  Form,
  Result,
  Button,
} from "antd";
import Axios from "axios";
import BottomPages from "../HostPage/Sections/BottomPages";

// -------------- style --------------- //
const breadCrumb_style = {
  background: `linear-gradient(to bottom, rgba(0,0,0,0)
  39%, rgba(0,0,0,0)
  41%, rgba(0,0,0,0.65)
  100%),
  url('https://source.unsplash.com/1600x900/?cooking'), #1c1c1c`,
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
const upload_middleBox_style = {
  maxWidth: "600px",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginRight: "auto",
  marginLeft: "auto",
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
};
// ------------------------------------ //
const { Title } = Typography;
const { Option } = Select;

function ListYourKitchenPage({ match }) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [LookingTo, setLookingTo] = useState("");
  const [ShowSuccess, setShowSuccess] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onLookingToChange = (label) => {
    console.log(label.key);
    setLookingTo(label.key);
  };

  const onSubmit = () => {
    const variables = {
      writer: localStorage.getItem("userId"),
      name: Name,
      email: Email,
      looking_to: LookingTo,
    };

    Axios.post("/api/temp-kitchenReq/list-your-kitchen", variables).then(
      (response) => {
        if (response.data.success) {
          console.log(response.data);
          setShowSuccess(true);
        } else {
          alert("Failed to send your information");
        }
      }
    );
  };

  return (
    <div>
      <Row type="flex">
        {/*------------------- Image -----------------------*/}
        <div style={breadCrumb_style}>
          <Title level={1} style={{ color: "white" }}>
            List your kitchen on Souskasa
          </Title>
        </div>
        {/*--------------------------------------------------*/}

        {/*------------------- Inputs -----------------------*/}
        {ShowSuccess && (
          <Col
            lg={24}
            md={24}
            xs={24}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={upload_middleBox_style}>
              <Result
                status="success"
                title="Successfully send the information"
                subTitle="It will take a few days to answer. Thank you for your decision!"
              />
            </div>
          </Col>
        )}

        {!ShowSuccess && (
          <Col
            lg={24}
            md={24}
            xs={24}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={upload_middleBox_style}>
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
                <Input
                  placeholder="Name"
                  size="large"
                  onChange={onNameChange}
                />
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

                {/* I am looking to.. */}
                <Select
                  labelInValue
                  noStyle
                  size="large"
                  placeholder="I am looking to..."
                  onChange={onLookingToChange}
                >
                  <Option value="Collaborate">Collaborate</Option>
                  <Option value="Share_Kitchen">Share Kitchen</Option>
                  <Option value="Rent_out_entire_kitchen">
                    Rent out entire kitchen
                  </Option>
                </Select>

                <br />
                <br />

                {/* Submit Button */}

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
        )}
      </Row>
      {/*--------------------------------------------------*/}

      {/*-------------------BottomPages-------------------*/}
      <BottomPages url={match.url} />
      {/*--------------------------------------------------*/}
    </div>
  );
}

export default ListYourKitchenPage;
