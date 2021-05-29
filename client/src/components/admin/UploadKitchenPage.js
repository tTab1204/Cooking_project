import React, { useState } from "react";
import {
  Result,
  Alert,
  Row,
  Col,
  Typography,
  Input,
  Form,
  Button,
  message,
} from "antd";
import Axios from "axios";
import ImageUpload from "../utils/ImageUpload";
const { Title } = Typography;
const { TextArea } = Input;

// -------------- style --------------- //
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

function UploadKitchenPage({ match }) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Capacity, setCapacity] = useState(0);
  const [Description, setDescription] = useState("");
  const [RentPrice, setRentPrice] = useState(0);
  const [Images, setImages] = useState([]);
  const [ShowSuccess, setShowSuccess] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const refreshImages = (updatedImages) => {
    setImages(updatedImages);
  };

  const onCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const onRentPriceChange = (e) => {
    setRentPrice(e.target.value);
  };

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
    const variables = {
      writer: localStorage.getItem("userId"),
      name: Name,
      email: Email,
      images: Images,
      address: Address,
      capacity: Capacity,
      rent_price: RentPrice,
      description: Description,
    };

    Axios.post(`/api/kitchens/upload-kitchen`, variables).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        successMessage();
      } else {
        alert("Failed to send Info to DB");
      }
    });
  };

  return (
    <>
      <Row type="flex">
        {/*------------------- Inputs -----------------------*/}

        {ShowSuccess ? (
          <Col
            lg={24}
            md={24}
            xs={24}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={upload_middleBox_style}>
              <Result
                status="success"
                title="Successfully upload the information in DB"
              />
            </div>
          </Col>
        ) : (
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
                <Title level={4} style={{ color: "gray" }}>
                  Put your Images
                </Title>
                <ImageUpload refreshFunction={refreshImages} url={match.url} />
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
            </div>
          </Col>
        )}
      </Row>
      {/*--------------------------------------------------*/}
    </>
  );
}

export default UploadKitchenPage;
