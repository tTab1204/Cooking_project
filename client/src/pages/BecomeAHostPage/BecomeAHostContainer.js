import React, { useState } from 'react';
import BecomeAHostPresenter from './BecomeAHostPresenter';
import { successMessage } from 'utils/successMessage';

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

  const onSubmit = () => {
    successMessage(setShowSuccess);
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
