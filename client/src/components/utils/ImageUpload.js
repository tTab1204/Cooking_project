import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Typography } from "antd";
import Axios from "axios";
import {
  DropzoneContainer,
  DropzoneTitle,
  ImagesContainer,
  MenuImageWrapper,
  MenuImageContainer,
  MenuImage,
  MenuImageTitle,
  DropzoneBox,
} from "./ImageUploadStyle";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { LOCAL_SERVER } from "../Config";

const { Title } = Typography;

function ImageUpload({ refreshFunction, url, refreshImages }) {
  const [Images, setImages] = useState([]);
  let urlType = "";

  // urlType이라는 변수를 지정해 줌으로써 upload-event인지 / upload-kitchen인지 구분한다.
  if (url === "/upload-event") urlType = "events";
  else if (url === "/upload-host") urlType = "hosts";
  else urlType = "kitchens";

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

    Axios.post(`/api/${urlType}/upload-image`, formData, config).then(
      (response) => {
        if (response.data.success) {
          console.log(response.data);
          setImages([...Images, response.data.image]);
          refreshFunction([...Images, response.data.image]);
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

    refreshFunction(newImages);
  };

  return (
    <>
      <Title level={4} style={{ color: "gray" }}>
        Upload Images
      </Title>
      <DropzoneBox>
        <Dropzone onDrop={onDrop} multiple={true} maxSize={800000000}>
          {({ getRootProps, getInputProps }) => (
            <DropzoneContainer {...getRootProps()}>
              <input {...getInputProps()} />
              <DropzoneTitle>
                <Title level={4} style={{ color: "gray" }}>
                  Upload Your Menu Image
                </Title>
                <UploadOutlined style={{ fontSize: "2rem", color: "gray" }} />
              </DropzoneTitle>
            </DropzoneContainer>
          )}
        </Dropzone>
        <ImagesContainer>
          {refreshImages.map((image, index) => (
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
      </DropzoneBox>
    </>
  );
}

export default ImageUpload;
