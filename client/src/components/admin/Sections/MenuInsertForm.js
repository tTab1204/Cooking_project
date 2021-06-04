import React, { useState } from "react";
import { Typography, Input, Form, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const MenuInsertForm = () => {
  const [MenuName, setMenuName] = useState("");
  const [MenuDesciprtion, setMenuDesciprtion] = useState("");
  const [Images, setImages] = useState([]);

  const onMenuNameChange = (e) => {
    setMenuName(e.target.value);
  };

  const onMenuDescriptionChange = (e) => {
    setMenuDesciprtion(e.target.value);
  };

  const handleUpload = (files) => {
    let formData = new FormData();
    const config = {
      // header에 content-type을 지정해줘야 오류를 막을 수 있다.
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    Axios.post("/api/events/upload-image", formData, config).then(
      (response) => {
        if (response.data.success) {
        } else {
          alert("이미지 업로드에 실패했습니다.");
        }
      }
    );
  };

  // 내가 코드를 잘못 짠 부분이겠지만, 처음으로 테스트 코드의 중요성을 느낀 부분
  const onImageUpload = (e) => {
    if (e.file.response !== undefined) {
      console.log(e.file.response.image);

      setImages([...Images, e.file.response.image]);
      //   refreshFunction([...Images, e.file.response.image]);
    }
  };

  return (
    <div>
      <Title level={4}>Menu</Title>
      <Form.Item label="Name" required>
        <Input
          placeholder="Menu Name"
          onChange={onMenuNameChange}
          value={MenuName}
        />
      </Form.Item>
      <Form.Item label="Description" required>
        <TextArea
          placeholder="Menu Description"
          onChange={onMenuDescriptionChange}
          value={MenuDesciprtion}
          // style={{ marginBottom: "1.5rem" }}
        />
      </Form.Item>
      <Form.Item label="Upload">
        <Upload
          action="/api/events/upload-image"
          listType="picture"
          maxCount={1}
          onChange={onImageUpload}
        >
          <Button>Click to upload</Button>
        </Upload>
      </Form.Item>
    </div>
  );
};

export default MenuInsertForm;
