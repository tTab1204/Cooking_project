import React, { useState } from 'react';
import axios from 'axios';
import UploadContainer from './UploadContainer';
import ImageUpload from './ImageUpload/ImageUpload';
import { Button, Form, Input } from 'antd';
import { successMessage } from 'utils/successMessage';
import { useSelector } from 'react-redux';

const { TextArea } = Input;

const UploadKitchenInput = () => {
  const userId = useSelector(state => state.userData.userId);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [capacity, setCapacity] = useState(0);
  const [description, setDescription] = useState('');
  const [rentPrice, setRentPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [, setShowSuccess] = useState(false);

  const onNameChange = e => setName(e.target.value);
  const onEmailChange = e => setEmail(e.target.value);
  const onAddressChange = e => setAddress(e.target.value);
  const onDescriptionChange = e => setDescription(e.target.value);
  const onCapacityChange = e => setCapacity(e.target.value);
  const onRentPriceChange = e => setRentPrice(e.target.value);

  const refreshImages = updatedImages => setImages(updatedImages);

  const onSubmit = () => {
    const variables = {
      writer: userId,
      name: name,
      email: email,
      images: images,
      address: address,
      capacity: capacity,
      rent_price: rentPrice,
      description: description,
    };

    axios.post(`/api/kitchens/upload-kitchen`, variables).then(response => {
      if (response.data.success) successMessage(setShowSuccess);
      else alert('Failed to send Info to DB');
    });
  };

  return (
    <UploadContainer>
      <Form onSubmit={onSubmit}>
        <Input placeholder="Name" size="large" onChange={onNameChange} />
        <Input placeholder="Email" size="large" onChange={onEmailChange} />
        <Input placeholder="address" size="large" onChange={onAddressChange} />
        <Input
          placeholder="capacity"
          size="large"
          suffix="명"
          onChange={onCapacityChange}
        />
        <Input
          placeholder="Rental Price"
          size="large"
          suffix="원"
          onChange={onRentPriceChange}
        />
        <TextArea
          placeholder="Please write down short description about yourself"
          onChange={onDescriptionChange}
          value={description}
        />
        <ImageUpload
          refreshFunction={refreshImages}
          refreshImages={images}
          url="kitchens"
        />
        <Button onClick={onSubmit} size="large" type="primary">
          Submit
        </Button>
      </Form>
    </UploadContainer>
  );
};

export default UploadKitchenInput;
