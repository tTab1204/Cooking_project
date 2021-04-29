import React from "react";
import {
  Result,
  Alert,
  Row,
  Col,
  Typography,
  Input,
  Select,
  Form,
  Button,
} from "antd";
import Axios from "axios";
import ImageUpload from "../HostPage/Sections/ImageUpload";
import BottomPages from "../HostPage/Sections/BottomPages";

const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

function ListYourKitchenPage() {
  return (
    <div>
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
            List your kitchen on Souskasa
          </Title>
        </div>
        {/*--------------------------------------------------*/}
        {/*------------------- Inputs -----------------------*/}
        {/* {ShowSuccess ? (
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
              <Result
                status="success"
                title="Successfully send the information"
                subTitle="It will take a few days to answer. Thank you for your decision!"
              />
            </div>
          </Col>
        ) :  */}
        (
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
            <Form
            //onSubmit={onSubmit}
            >
              {/* Name */}
              <Input
                placeholder="Name"
                size="large"
                //  onChange={onNameChange}
              />
              <br />
              <br />
              {/* Email */}
              <Input
                placeholder="Email"
                size="large"
                //  onChange={onEmailChange}
              />
              <br />
              <br />

              {/* deposit */}
              <Input
                placeholder="deposit number"
                size="large"
                // onChange={onDepositChange}
              />
              <br />
              <br />

              {/* Food-Nation */}
              <Select
                labelInValue
                noStyle
                size="large"
                placeholder="food_nation"
                // onChange={onFood_nationChange}
              >
                <Option value="Korean">Korean</Option>
                <Option value="Japan">Japan</Option>
                <Option value="Chinese">Chinese</Option>
                <Option value="Western">Western</Option>
              </Select>

              <br />
              <br />

              {/* Kitchen_Experience */}
              <Select
                labelInValue
                noStyle
                size="large"
                placeholder="Previous industrial kitchen experience"
                // onChange={onKitchen_ExChange}
              >
                <Option value="None">None</Option>
                <Option value="Less than a year">Less than a year</Option>
                <Option value="More than a year">More than a year</Option>
              </Select>

              <br />
              <br />

              {/* Description */}
              <TextArea
                placeholder="Please write down short description about yourself"
                // onChange={onDescriptionChange}
                // value={Description}
              />

              <br />
              <br />

              {/* Image Upload */}
              <Title level={4} style={{ color: "gray" }}>
                Put your Images
              </Title>
              {/* <ImageUpload refreshFunction={refreshImages} /> */}

              <br />
              <br />

              {/* Submit Button */}

              <Button
                // onClick={onSubmit}
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
      <BottomPages />
      {/*--------------------------------------------------*/}
    </div>
  );
}

export default ListYourKitchenPage;
