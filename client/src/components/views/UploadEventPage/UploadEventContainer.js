import React, { useState } from 'react';
import { message } from 'antd';
import Axios from 'axios';
import UploadEventPresenter from './UploadEventPresenter';
import UploadSuccess from '../../utils/UploadSuccess';

function UploadEventContainer({ match }) {
  const url = match.url;

  const [Name, setName] = useState('');
  const [Time, setTime] = useState('');
  const [Location, setLocation] = useState('');
  const [Price, setPrice] = useState(0);
  const [Description, setDescription] = useState('');
  const [EventDate, setEventDate] = useState('');
  const [ShowSuccess, setShowSuccess] = useState(false);

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
    console.log('dateString: ', dateString);
    setEventDate(dateString);
  };

  const successMessage = () => {
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });

    setTimeout(() => {
      message.success({
        content: 'Success!',
        key,
        duration: 2,
      });
      setShowSuccess(true);
    }, 2000);
  };

  const onSubmit = () => {
    const variables = {
      writer: localStorage.getItem('userId'),
      host: '60d58b2a10eedb34205360cc',
      name: Name,
      time: Time,
      location: Location,
      price: Price,
      description: Description,
      state: 'valid',
      date: EventDate,
      images: Images,
    };

    Axios.post('/api/events/upload-event', variables).then((response) => {
      if (response.data.success) {
        successMessage();
      } else {
        console.error(response.data);
      }
    });
  };

  const refreshImages = (updatedImages) => {
    setImages(updatedImages);
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
          Description={Description}
          Images={Images}
          refreshFunction={refreshImages}
          url={url}
        />
      )}
    </>
  );
}

export default UploadEventContainer;
