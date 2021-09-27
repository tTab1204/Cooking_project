import React, { useState } from 'react';
import { message } from 'antd';
import ListYourKitchenPresenter from './ListYourKitchenPresenter';
import { successMessage } from 'utils/successMessage';

function ListYourKitchenContainer() {
  const [, setName] = useState('');
  const [, setEmail] = useState('');
  const [, setLookingTo] = useState('');
  const [ShowSuccess, setShowSuccess] = useState(false);

  const onNameChange = e => {
    setName(e.target.value);
  };

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onSelectChange = label => {
    setLookingTo(label.key);
  };

  const onSubmit = () => {
    successMessage(setShowSuccess);
  };

  return (
    <>
      <ListYourKitchenPresenter
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onSelectChange={onSelectChange}
        onSubmit={onSubmit}
        ShowSuccess={ShowSuccess}
      />
    </>
  );
}

export default ListYourKitchenContainer;
