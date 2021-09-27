import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Typography } from 'antd';
import Axios from 'axios';
import {
  DropzoneContainer,
  DropzoneTitle,
  ImagesContainer,
  MenuImageWrapper,
  MenuImageContainer,
  MenuImage,
  MenuImageTitle,
  DropzoneBox,
} from './ImageUploadStyle';
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { LOCAL_SERVER } from 'utils/config';

const { Title } = Typography;

function ImageUpload({ refreshFunction, url, refreshImages }) {
  const [Images, setImages] = useState([]);

  const onDrop = files => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };

    formData.append('file', files[0]);

    Axios.post(`/api/${url}/upload-image`, formData, config).then(response => {
      if (response.data.success) {
        console.log(response.data);
        setImages([...Images, response.data.image]);
        refreshFunction([...Images, response.data.image]);
      } else {
        alert('이미지 업로드에 실패했습니다.');
      }
    });
  };

  const onDelete = image => {
    const currentIndex = Images.indexOf(image);
    let newImages = [...Images];
    newImages.splice(currentIndex, 1);
    setImages(newImages);
    refreshFunction(newImages);
  };

  return (
    <>
      <Title level={4} style={{ color: 'gray' }}>
        Upload Images
      </Title>
      <DropzoneBox>
        <Dropzone onDrop={onDrop} multiple={true} maxSize={800000000}>
          {({ getRootProps, getInputProps }) => (
            <DropzoneContainer {...getRootProps()}>
              <input {...getInputProps()} />
              <DropzoneTitle>
                <Title level={4} style={{ color: 'gray' }}>
                  Upload Your Menu Image
                </Title>
                <UploadOutlined style={{ fontSize: '2rem', color: 'gray' }} />
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
                  style={{ color: 'gray' }}
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
