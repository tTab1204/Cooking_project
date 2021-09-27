import React from 'react';
import { Alert } from 'antd';

const AlertBox = () => {
  return (
    <Alert
      message="Invite Only"
      description="Currently, we are operating on invite-only. Feel free to leave your contact information to be contacted in the future."
      type="success"
      showIcon
    />
  );
};

export default AlertBox;
