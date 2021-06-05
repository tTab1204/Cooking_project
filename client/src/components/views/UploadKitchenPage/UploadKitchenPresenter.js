import React from "react";
import { Alert, Row, Col, Typography, Input, Form, Button } from "antd";
import ImageUpload from "../../utils/ImageUpload";
import { MiddleBox } from "../UploadEventPage/UploadEventStyle";
const { Title } = Typography;
const { TextArea } = Input;

function UploadKitchenPresenter({
  onSubmit,
  onNameChange,
  onEmailChange,
  onAddressChange,
  onRentPriceChange,
  onDescriptionChange,
  onCapacityChange,
  Description,
  refreshFunction,
  Images,
  url,
}) {
  return (
    <>
      <Row type="flex">
        {/*------------------- Inputs -----------------------*/}

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
              {/* address */}
              <Input
                placeholder="address"
                size="large"
                onChange={onAddressChange}
              />
              <br />
              <br />

              {/* capacity */}
              <Input
                placeholder="capacity"
                size="large"
                suffix="명"
                onChange={onCapacityChange}
              />
              <br />
              <br />

              {/* Rent_Price */}
              <Input
                placeholder="Rental Price"
                size="large"
                suffix="원"
                onChange={onRentPriceChange}
              />
              <br />
              <br />

              {/* Description */}
              <TextArea
                placeholder="Please write down short description about yourself"
                onChange={onDescriptionChange}
                value={Description}
              />
              <br />
              <br />
              {/* Image Upload */}
              <ImageUpload
                refreshFunction={refreshFunction}
                refreshImages={Images}
                url={url}
              />
              <br />
              <br />
              {/* Submit Button */}
              <Button
                onClick={onSubmit}
                size="large"
                type="primary"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </Form>
          </MiddleBox>
        </Col>
      </Row>
      {/*--------------------------------------------------*/}
    </>
  );
}

export default UploadKitchenPresenter;
