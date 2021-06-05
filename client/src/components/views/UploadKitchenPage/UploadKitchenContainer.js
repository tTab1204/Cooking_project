import React, { useState } from "react";
import { message } from "antd";
import Axios from "axios";
import UploadSuccess from "../../utils/UploadSuccess";
import UploadKitchenPresenter from "./UploadKitchenPresenter";

function UploadKitchenContainer({ match }) {
  const url = match.url;

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

  const onCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const onRentPriceChange = (e) => {
    setRentPrice(e.target.value);
  };

  const refreshImages = (updatedImages) => {
    setImages(updatedImages);
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
      {ShowSuccess && <UploadSuccess />}

      {!ShowSuccess && (
        <UploadKitchenPresenter
          onSubmit={onSubmit}
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onAddressChange={onAddressChange}
          onRentPriceChange={onRentPriceChange}
          onDescriptionChange={onDescriptionChange}
          onCapacityChange={onCapacityChange}
          Description={Description}
          Images={Images}
          refreshFunction={refreshImages}
          url={url}
        />
      )}
    </>
  );
}

export default UploadKitchenContainer;
