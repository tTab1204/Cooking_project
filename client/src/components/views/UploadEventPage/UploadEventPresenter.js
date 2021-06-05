import React from "react";
import { Row, Col, Typography, Input, Form, Button, DatePicker } from "antd";

import {
  MiddleBox,
  DropzoneContainer,
  DropzoneTitle,
  ImagesContainer,
  MenuImageWrapper,
  MenuImageContainer,
  MenuImage,
  MenuImageTitle,
} from "./UploadEventStyle";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import Dropzone from "react-dropzone";
import { LOCAL_SERVER } from "../../Config";

const { Title } = Typography;
const { TextArea } = Input;

function UploadEventPresenter({
  onSubmit,
  onNameChange,
  onTimeChange,
  onLocationChange,
  onPriceChange,
  onDescriptionChange,
  onDateChange,
  onDrop,
  onDelete,
  Description,
  Images,
  loading,
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
            <Title level={4} style={{ color: "gray", paddingTop: "10px" }}>
              Information
            </Title>
            <Form onSubmit={onSubmit}>
              {/* Name */}
              <Input placeholder="Name" size="large" onChange={onNameChange} />
              <br />
              <br />
              {/* Time */}
              <Input placeholder="Time" size="large" onChange={onTimeChange} />
              <br />
              <br />
              {/* Location */}
              <Input
                placeholder="Location"
                size="large"
                onChange={onLocationChange}
              />
              <br />
              <br />

              {/* Price */}
              <Input
                placeholder="Price"
                size="large"
                suffix="원"
                onChange={onPriceChange}
              />
              <br />
              <br />

              {/* Description */}
              <TextArea
                placeholder="Please write down short description"
                onChange={onDescriptionChange}
                value={Description}
              />
              <br />
              <br />

              <Title level={4} style={{ color: "gray" }}>
                Select Your Event Day
              </Title>
              <DatePicker onChange={onDateChange} />

              <br />
              <br />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Dropzone onDrop={onDrop} multiple={true} maxSize={800000000}>
                  {({ getRootProps, getInputProps }) => (
                    <DropzoneContainer {...getRootProps()}>
                      <input {...getInputProps()} />
                      <DropzoneTitle>
                        <Title level={4}>Upload Your Menu Image</Title>
                        <UploadOutlined style={{ fontSize: "2rem" }} />
                      </DropzoneTitle>
                    </DropzoneContainer>
                  )}
                </Dropzone>
                <ImagesContainer>
                  {!loading &&
                    Images.map((image, index) => (
                      <MenuImageContainer key={index}>
                        <MenuImageWrapper>
                          <MenuImage src={`${LOCAL_SERVER}${image}`} />
                          <MenuImageTitle>{image.slice(8)}</MenuImageTitle>
                          <DeleteOutlined
                            style={{ color: "gray" }}
                            onClick={() => onDelete(image)}
                          />
                        </MenuImageWrapper>
                      </MenuImageContainer>
                    ))}
                </ImagesContainer>
              </div>

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
    </>
  );
}

export default UploadEventPresenter;
