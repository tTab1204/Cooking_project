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
  Divider,
  Steps,
} from "antd";
import { BreadCrumbImg, MiddleBox, BottomBox } from "./ListYourKitchenStyle";

const { Option } = Select;
const { Step } = Steps;
const { Title, Paragraph } = Typography;

function ListYourKitchenPresenter({
  ShowSuccess,
  onNameChange,
  onEmailChange,
  onLookingToChange,
  onSubmit,
}) {
  return (
    <>
      <Row type="flex">
        {/*------------------- Image -----------------------*/}
        <BreadCrumbImg>
          <Title level={1} style={{ color: "white" }}>
            List Your Kitchen
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
            </MiddleBox>
          </Col>
        )}
      </Row>
      {/*--------------------------------------------------*/}

      {/*-------------------BottomPages-------------------*/}
      <BottomBox>
        {/* First Bottom-Page */}
        <Title level={2}>Why List Your Kitchen?</Title>

        <Paragraph>
          Grow your brand as a chef, test out your new recipes, and share your
          lovely food with the community. You’re in full control of your
          availability, prices, and rules.
        </Paragraph>

        <Divider />

        {/* Second Bottom-Page */}
        <Title level={2}>Listing in 3 Steps</Title>
        <Steps direction="vertical">
          <Step
            status="process"
            title="Apply"
            description="Gain new customers by collaborating with local chefs. Make a guaranteed form of income by sharing your kitchen or allowing chefs to host pop-ups. You’re in full control of your availability, prices, and rules."
          />
          <Step
            status="process"
            title="Set Availability"
            description="Choose your own schedule, prices, and requirements for hosts. You can also set kitchen appliances, prep area, and fridge space you are willing to let the hosts use."
          />
          <Step
            status="process"
            title="Find Host"
            description="Once your listing is live, qualified hosts and reach out."
          />
        </Steps>

        <Divider />
        {/* Third Bottom-Page */}

        <Title level={2}>Payments made simple</Title>
        <Steps direction="vertical">
          <Step
            status="finish"
            title="No fees"
            description="There’s no cost to sign up, list, and share your kitchen."
          />
          <Step
            status="finish"
            title="Flexible payout models"
            description="Choose a payout model that fits your needs. Share your kitchen at a flat fee or collaborate with a chef and divide the revenue among the hosts."
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

export default ListYourKitchenPresenter;
