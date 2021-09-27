import React, { useState } from 'react';
import axios from 'axios';
import { showSuccessState } from 'atoms/atoms';
import { useRecoilState } from 'recoil';
import { userId } from 'utils/constants';
import { successMessage } from 'utils/successMessage';
import { Button, DatePicker, Form, Input, Typography } from 'antd';
import ImageUpload from './ImageUpload/ImageUpload';
import UploadContainer from './UploadContainer';

const { TextArea } = Input;
const { Title } = Typography;

const UploadEventInput = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [images, setImages] = useState([]);
  const [, setShowSuccess] = useRecoilState(showSuccessState);

  const onNameChange = e => setName(e.target.value);
  const onTimeChange = e => setTime(e.target.value);
  const onLocationChange = e => setLocation(e.target.value);
  const onPriceChange = e => setPrice(e.target.value);
  const onDescriptionChange = e => setDescription(e.target.value);
  const onDateChange = (date, dateString) => setEventDate(dateString);

  const refreshImages = updatedImages => setImages(updatedImages);

  const onSubmit = () => {
    const variables = {
      writer: userId,
      host: '60d58464c760016778daa8cf',
      name: name,
      time: time,
      location: location,
      price: price,
      description: description,
      state: 'valid',
      date: eventDate,
      images: images,
    };

    axios.post('/api/events/upload-event', variables).then(response => {
      if (response.data.success) successMessage(setShowSuccess);
      else console.error(response.data);
    });
  };

  return (
    <UploadContainer title="Event Information">
      <Form onSubmit={onSubmit}>
        <Input placeholder="Name" size="large" onChange={onNameChange} />
        <Input placeholder="Time" size="large" onChange={onTimeChange} />
        <Input
          placeholder="Location"
          size="large"
          onChange={onLocationChange}
        />
        <Input
          placeholder="Price"
          size="large"
          suffix="원"
          onChange={onPriceChange}
        />
        <TextArea
          placeholder="Please write down short description"
          onChange={onDescriptionChange}
          value={description}
        />
        <Title level={4}>Select Your Event Day</Title>
        <DatePicker onChange={onDateChange} />

        <ImageUpload
          refreshFunction={refreshImages}
          refreshImages={images}
          url="events"
        />

        <Button onClick={onSubmit} size="large" type="primary">
          Submit
        </Button>
      </Form>
    </UploadContainer>
  );
};

export default UploadEventInput;
