import React, { useState } from "react";
import { Typography, Input, Form, Button, message, Modal } from "antd";
import Axios from "axios";

import UploadEventPresenter from "./UploadEventPresenter";
import UploadSuccess from "../../utils/UploadSuccess";

function UploadEventContainer() {
  const [Name, setName] = useState("");
  const [Time, setTime] = useState("");
  const [Location, setLocation] = useState("");
  const [Price, setPrice] = useState(0);
  const [Description, setDescription] = useState("");
  const [Date, setDate] = useState("");
  const [ShowSuccess, setShowSuccess] = useState(false);

  const [loading, setLoading] = useState(true);
  const [Images, setImages] = useState([]);

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

  const onDrop = (files) => {
    // files: 이 파라미터는 업로드한 파일의 정보가 담겨있는 파라미터이다.

    //Formdata: 복합적인 데이터(파일 등)을 전송할 때 쓰는 유용한 객체
    let formData = new FormData();
    const config = {
      // header에 content-type을 지정해줘야 오류를 막을 수 있다.
      header: { "content-type": "multipart/form-data" },
    };

    // files[0]: 배열로 한 이유는 업로드 한
    // '첫번째' 파일을 가져오기 위함임.
    formData.append("file", files[0]);

    Axios.post(`/api/events/upload-image`, formData, config).then(
      (response) => {
        if (response.data.success) {
          console.log(response.data);
          setImages([...Images, response.data.image]);
          setLoading(false);
        } else {
          alert("이미지 업로드에 실패했습니다.");
        }
      }
    );
  };

  const onDelete = (image) => {
    //indexOf(): 배열 안의 요소의 번지 수를 알려준다.
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];

    newImages.splice(currentIndex, 1);

    setImages(newImages);
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
      //   menu: [],
    };

    Axios.post("/api/events/upload-event", variables).then((response) => {
      if (response.data.success) {
        successMessage();
      } else {
        console.error(response.data);
      }
    });
  };

  return (
    <>
      {ShowSuccess && <UploadSuccess />}

      {!ShowSuccess && (
        <UploadEventPresenter
          onSubmit={onSubmit}
          onNameChange={onNameChange}
          onTimeChange={onTimeChange}
          onLocationChange={onLocationChange}
          onPriceChange={onPriceChange}
          onDescriptionChange={onDescriptionChange}
          onDateChange={onDateChange}
          onDrop={onDrop}
          onDelete={onDelete}
          Description={Description}
          Images={Images}
          loading={loading}
        />
      )}
    </>
  );
}

export default UploadEventContainer;
