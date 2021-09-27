import React, { useState } from 'react';
import axios from 'axios';
import UploadContainer from 'components/UploadContainer';
import { Input, Select, Button, Form } from 'antd';
import { successMessage } from 'utils/successMessage';
import ImageUpload from 'components/ImageUpload/ImageUpload';
import { useRecoilState } from 'recoil';
import { showSuccessState } from 'atoms/atoms';
import { host, userId } from 'utils/constants';

const { Option } = Select;
const { TextArea } = Input;

const UploadHostInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hasCookingExperience, setKitchen_Ex] = useState('');
  const [deposit, setDeposit] = useState('');
  const [foodNations, setFood_Nation] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [, setShowSuccess] = useRecoilState(showSuccessState);

  const onNameChange = e => setName(e.target.value);
  const onEmailChange = e => setEmail(e.target.value);
  const onKitchen_ExChange = label => setKitchen_Ex(label.key);
  const onDepositChange = e => setDeposit(e.target.value);
  const onFood_nationChange = label => setFood_Nation(label.key);
  const onDescriptionChange = e => setDescription(e.target.value);

  const refreshImages = updatedImages => setImages(updatedImages);

  const onSubmit = () => {
    const variables = {
      writer: userId,
      name: name,
      email: email,
      kitchen_experience: hasCookingExperience,
      deposit: deposit,
      food_nation: foodNations,
      description: description,
      image: images,
    };

    axios.post('/api/hosts/become-a-host', variables).then(response => {
      if (response.data.success) successMessage(setShowSuccess);
      else alert('Failed to become a host');
    });
  };

  return (
    <UploadContainer title="Information">
      <Form onSubmit={onSubmit}>
        <Input placeholder="Name" size="large" onChange={onNameChange} />
        <Input placeholder="Email" size="large" onChange={onEmailChange} />
        <Input
          placeholder="deposit number"
          size="large"
          onChange={onDepositChange}
        />

        <Select
          labelInValue
          noStyle
          size="large"
          placeholder="food_nation"
          onChange={onFood_nationChange}
        >
          <Option value="Korean">Korean</Option>
          <Option value="Japan">Japan</Option>
          <Option value="Chinese">Chinese</Option>
          <Option value="Western">Western</Option>
        </Select>

        <Select
          labelInValue
          noStyle
          size="large"
          placeholder="Previous industrial kitchen experience"
          onChange={onKitchen_ExChange}
        >
          <Option value="None">None</Option>
          <Option value="Less than a year">Less than a year</Option>
          <Option value="More than a year">More than a year</Option>
        </Select>

        <TextArea
          placeholder="Please write down short description about yourself"
          onChange={onDescriptionChange}
          value={description}
        />

        <ImageUpload
          refreshFunction={refreshImages}
          refreshImages={images}
          url={host.url}
        />

        <Button onClick={onSubmit} size="large" type="primary">
          I'm intersted
        </Button>
      </Form>
    </UploadContainer>
  );
};

export default UploadHostInput;
