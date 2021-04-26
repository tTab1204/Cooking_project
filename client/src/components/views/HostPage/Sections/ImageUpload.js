import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import Axios from "axios";

function ImageUpload(props) {
  const [Images, setImages] = useState([]);

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
        // 이렇게 하면 하나의 이미지만 넣을 수 있기 때문에
        // setImages(response.data.image)
        console.log(response.data);

        // 다른 라이브러리 이용해 불변성 유지 가능
        // 전개 연산자를 사용해 다음과 같은 방식으로 이전, 이후의 이미지(여러개)를 저장할 수 있게 한다.
        setImages([...Images, response.data.image]);
        props.refreshFunction([...Images, response.data.image]);
      } else {
        // Error: ENOENT: no such file or directory,
        //  파일 또는 디렉토리가 없을 경우 나오는 에러
        // 가장 흔한 실수가 생성한 파일명과 호출하는 파일명이 다를 경우

        alert("이미지 업로드에 실패했습니다.");
      }
    });
  };

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];

    newImages.splice(currentIndex, 1);

    setImages(newImages);

    props.refreshFunction(newImages);
  };

  return (
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
