import React, { useState } from 'react';
import { message } from 'antd';
import BecomeAHostPresenter from './BecomeAHostPresenter';

function BecomeAHostContainer() {
  const [, setName] = useState('');
  const [, setEmail] = useState('');
  const [, setCookingExperience] = useState('');

  const [ShowSuccess, setShowSuccess] = useState(false);

  const onNameChange = e => {
    setName(e.target.value);
  };

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onSelectChange = label => {
    setCookingExperience(label.key);
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
    successMessage();
  };

  return (
    <>
      <BecomeAHostPresenter
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onSelectChange={onSelectChange}
        onSubmit={onSubmit}
        ShowSuccess={ShowSuccess}
      />
    </>
  );
}

export default BecomeAHostContainer;
