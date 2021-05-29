import React, { useState } from "react";
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
  Divider,
  Steps,
} from "antd";
import { BreadCrumbImg, MiddleBox, BottomBox } from "./BecomeAHostStyle";

const { Option } = Select;
const { Step } = Steps;
const { Title, Paragraph } = Typography;

function BecomeAHostPresenter({
  ShowSuccess,
  onNameChange,
  onEmailChange,
  onKitchen_ExChange,
  onSubmit,
}) {
  return (
    <>
      <Row type="flex">
        {/*------------------- Image -----------------------*/}
        <BreadCrumbImg>
          <Title level={1} style={{ color: "white" }}>
            Become a Host
          </Title>
        </BreadCrumbImg>
        {/*--------------------------------------------------*/}

        {/*------------------- Inputs -----------------------*/}

        {ShowSuccess ? (
          <Col
            lg={24}
            md={24}
            xs={24}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <MiddleBox>
              <Result
                status="success"
                title="Successfully send the information"
                subTitle="It will take a few days to answer. Thank you for your decision!"
              />
            </MiddleBox>
          </Col>
        ) : (
          <Col
            lg={24}
            md={24}
            xs={24}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <MiddleBox>
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

                {/* Kitchen_Experience */}
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
            </MiddleBox>
          </Col>
        )}
      </Row>
      {/*--------------------------------------------------*/}

      {/*-------------------BottomPages-------------------*/}
      <BottomBox>
        {/* First Bottom-Page */}
        <Title level={2}>Why Host an Event?</Title>

        <Paragraph>
          Grow your brand as a chef, test out your new recipes, and share your
          lovely food with the community. You’re in full control of your
          availability, prices, and rules.
        </Paragraph>

        <Divider />

        {/* Second Bottom-Page */}
        <Title level={2}>Hosting in 3 Steps</Title>
        <Steps direction="vertical">
          <Step
            status="process"
            title="Apply"
            description="Apply to become a host. We will perform basic identity verficiation and background checks."
          />
          <Step
            status="process"
            title="Plan Your Event"
            description="Bring your own kitchen or look for local kitchens who would love to host you."
          />
          <Step
            status="process"
            title="Cook"
            description="We handle all the logistics before, during, and after the event. No need to worry about invoices, payments, and ticketing. Connect with your customers in unique ways. Grow your following and automatically update them of your future events."
          />
        </Steps>

        <Divider />
        {/* Third Bottom-Page */}

        <Title level={2}>Payments made simple</Title>
        <Steps direction="vertical">
          <Step
            status="finish"
            title="Low fees"
            description="There’s no cost to sign up and host your events. Souskasa generally charges lower than the event ticketing industry standard."
          />
          <Step
            status="finish"
            title="Plan Your Event"
            description="Know how much revenue you will make before your event even happens (minus tips)."
          />
          <Step
            status="finish"
            title="Get paid quickly"
            description="
Once the event ends, the balance will be available in your dashboard to payout by direct deposit."
          />
        </Steps>
      </BottomBox>
      {/*--------------------------------------------------*/}
    </>
  );
}

export default BecomeAHostPresenter;
