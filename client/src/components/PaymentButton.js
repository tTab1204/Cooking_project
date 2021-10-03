import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const PaymentButton = ({ onClick, name, type }) => {
  return (
    <ButtonWrapper>
      <Button size="large" type={type} onClick={onClick}>
        {name}
      </Button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  margin: 4rem auto 0;
  max-width: 360px;
  padding: 0 1rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1.5rem;

  & > button {
    width: 100%;
  }
`;

export default PaymentButton;
