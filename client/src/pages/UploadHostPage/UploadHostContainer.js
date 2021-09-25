import React, { useState } from 'react';
import Axios from 'axios';
import UploadSuccess from 'components/UploadSuccess/UploadSuccess';
import UploadHostPresenter from './UploadHostPresenter';
import { message } from 'antd';

function UploadHostContainer({ match }) {
  const userId = localStorage.getItem('userId');
  const url = match.url;

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Kitchen_Ex, setKitchen_Ex] = useState('');
  const [Deposit, setDeposit] = useState('');
  const [Food_Nation, setFood_Nation] = useState('');
  const [Description, setDescription] = useState('');
  const [Images, setImages] = useState([]);
  const [ShowSuccess, setShowSuccess] = useState(false);

  const onNameChange = e => {
    setName(e.target.value);
  };

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onKitchen_ExChange = label => {
    console.log(label.key);
    setKitchen_Ex(label.key);
  };

  const onDepositChange = e => {
    setDeposit(e.target.value);
  };

  const onFood_nationChange = label => {
    console.log(label.key);
    setFood_Nation(label.key);
  };

  const onDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const refreshImages = updatedImages => {
    setImages(updatedImages);
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
      writer: userId,
      name: Name,
      email: Email,
      kitchen_experience: Kitchen_Ex,
      deposit: Deposit,
      food_nation: Food_Nation,
      description: Description,
      image: Images,
    };

    Axios.post('/api/hosts/become-a-host', variables).then(response => {
      if (response.data.success) {
        successMessage();
      } else {
        alert('Failed to become a host');
      }
    });
  };

  return (
    <>
      {ShowSuccess && <UploadSuccess />}

      {!ShowSuccess && (
        <UploadHostPresenter
          onSubmit={onSubmit}
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onKitchen_ExChange={onKitchen_ExChange}
          onDepositChange={onDepositChange}
          onDescriptionChange={onDescriptionChange}
          onFood_nationChange={onFood_nationChange}
          Description={Description}
          Images={Images}
          refreshFunction={refreshImages}
          url={url}
        />
      )}
    </>
  );
}

export default UploadHostContainer;
