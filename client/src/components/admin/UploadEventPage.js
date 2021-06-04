import React, { useState } from "react";
import {
  Result,
  Row,
  Col,
  Typography,
  Input,
  Form,
  Button,
  message,
  DatePicker,
  Modal,
} from "antd";
import Axios from "axios";
import ImageUpload from "../utils/ImageUpload";
import MenuInsertForm from "./Sections/MenuInsertForm";
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
function UploadEvent({ match }) {
  const [Name, setName] = useState("");
  const [Time, setTime] = useState("");
  const [Location, setLocation] = useState("");
  const [Price, setPrice] = useState(0);
  const [Description, setDescription] = useState("");
  const [Date, setDate] = useState("");
  const [Menu, setMenu] = useState([<MenuInsertForm />]);
  const [Images, setImages] = useState([]);
  const [ShowSuccess, setShowSuccess] = useState(false);
  const [ShowModal, setShowModal] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onTimeChange = (e) => {
    setTime(e.target.value);
  };
  const onLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const onPriceChange = (e) => {
    setPrice(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onDateChange = (date, dateString) => {
    console.log("dateString: ", dateString);
    setDate(dateString);
  };

  const refreshImages = (updatedImages) => {
    setImages(updatedImages);
  };

  const onHandleModal = () => {
    setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  const onInsertMenu = () => {
    setMenu([...Menu, <MenuInsertForm />]);
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
      host: "609ce5949d64244f2c79cc53", // dopa
      name: Name,
      time: Time,
      location: Location,
      price: Price,
      description: Description,
      state: "pre",
      date: Date,
      images: Images,
      // menu: {
      //   name: ,
      //   description: ,
      // }
    };

    Axios.post("/api/events/upload-event", variables).then((response) => {
      if (response.data.success) {
        successMessage();
      } else {
        console.error(response.data);
      }
    });
  };

  const onMenuSubmit = () => {
    console.log("이미지 모여있냐? ", Images);
    setShowModal(false);
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
              <Title level={4} style={{ color: "gray", paddingTop: "10px" }}>
                Information
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
                {/* Time */}
                <Input
                  placeholder="Time"
                  size="large"
                  onChange={onTimeChange}
                />
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

                {/* Menu */}
                <Title level={4} style={{ color: "gray" }}>
                  Menu
                </Title>
                <Button onClick={onHandleModal} type="primary">
                  Insert Your Menu
                </Button>

                {/* Image Upload */}
                <Title level={4} style={{ color: "gray" }}>
                  Images
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
      <Modal
        title="Put Your Menu!"
        visible={ShowModal}
        // confirmLoading={confirmLoading}
        style={{ fontSize: "1.4rem" }}
        footer={[
          <Button onClick={handleCancel}>닫기</Button>,
          <Button type="primary" onClick={onMenuSubmit}>
            제출하기
          </Button>,
        ]}
      >
        <Form layout="vertical">{Menu}</Form>
        <Button type="primary" onClick={onInsertMenu}>
          +
        </Button>
      </Modal>
    </>
  );
}

export default UploadEvent;
