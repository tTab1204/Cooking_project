import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import Axios from "axios";

function ImageUpload({ refreshFunction, url }) {
  const [Images, setImages] = useState([]);
  let urlType = "";

  // urlType이라는 변수를 지정해 줌으로써 upload-event인지 / upload-kitchen인지 구분한다.
  if (url === "/upload-event") urlType = "events";
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
    <div style={{ display: "flex", justifyContent: "space-between" }}>
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
        {Images.map((image, index) => (
          <div key={index} onClick={() => onDelete(image)}>
            <img
              style={{
                minWidth: "300px",
                width: "300px",
                height: "240px",
              }}
              src={`http://localhost:5000/${image}`}
              alt={`hostImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUpload;
