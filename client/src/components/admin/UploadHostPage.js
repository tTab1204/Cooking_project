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
  Icon,
  message,
} from "antd";

import Axios from "axios";

import Dropzone from "react-dropzone";
const { Title } = Typography;
const { Option } = Select;
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

function UploadHostPage() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Kitchen_Ex, setKitchen_Ex] = useState("");
  const [Deposit, setDeposit] = useState("");
  const [Food_Nation, setFood_Nation] = useState("");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState("");
  const [ShowSuccess, setShowSuccess] = useState(false);

  const onDrop = (files) => {
    // files: 이 파라미터는 업로드한 파일의 정보가 담겨있는 파라미터이다.

    //Formdata: 복합적인 데이터(파일 등)을 전송할 때 쓰는 유용한 객체
    let formData = new FormData();
    const config = {
      // header에 content-type을 지정해줘야 오류를 막을 수 있다.
      header: { "content-type": "multipart/form-data" },
    };

    formData.append("file", files[0]);

    Axios.post("/api/hosts/uploadImage", formData, config).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setImage(response.data.image);
      } else {
        // Error: ENOENT: no such file or directory,
        //  파일 또는 디렉토리가 없을 경우 나오는 에러
        // 가장 흔한 실수가 생성한 파일명과 호출하는 파일명이 다를 경우

        alert("이미지 업로드에 실패했습니다.");
      }
    });
  };

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

  const onDepositChange = (e) => {
    setDeposit(e.target.value);
  };

  const onFood_nationChange = (label) => {
    console.log(label.key);
    setFood_Nation(label.key);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
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
      kitchen_experience: Kitchen_Ex,
      deposit: Deposit,
      food_nation: Food_Nation,
      description: Description,
      image: Image,
    };

    Axios.post("/api/hosts/become-a-host", variables).then((response) => {
      if (response.data.success) {
        successMessage();
      } else {
        alert("Failed to become a host");
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
                {/* deposit */}
                <Input
                  placeholder="deposit number"
                  size="large"
                  onChange={onDepositChange}
                />
                <br />
                <br />
                {/* Food-Nation */}
                <Select
                  labelInValue
                  noStyle
                  size="large"
                  placeholder="food_nation"
                  onChange={onFood_nationChange}
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
                  onChange={onKitchen_ExChange}
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
                  onChange={onDescriptionChange}
                  value={Description}
                />
                <br />
                <br />
                {/* Image Upload */}
                <Title level={4} style={{ color: "gray" }}>
                  Put your Images
                </Title>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Dropzone onDrop={onDrop} multiple={true} maxSize={800000000}>
                    {({ getRootProps, getInputProps }) => (
                      <div
                        style={{
                          width: "300px",
                          height: "240px",
                          border: "1px solid lightgray",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <Icon type="plus" style={{ fontSize: "3rem" }} />
                      </div>
                    )}
                  </Dropzone>

                  <div
                    style={{
                      display: "flex",
                      width: "350px",
                      height: "240px",
                      overflowX: "scroll",
                    }}
                  >
                    {Image && (
                      <div>
                        <img
                          style={{
                            minWidth: "300px",
                            width: "300px",
                            height: "240px",
                          }}
                          src={`http://localhost:5000/${Image}`}
                          alt={`hostImg`}
                        />
                      </div>
                    )}
                  </div>
                </div>
                );
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
    </>
  );
}

export default UploadHostPage;
