import React from 'react';
import styled from 'styled-components';
import { Radio, Typography } from 'antd';
import { FormContainer } from './Message';
import { CreditCardOutlined } from '@ant-design/icons';

const { Title } = Typography;

const PaymentMethod = () => {
  return (
    <FormContainer>
      <Title level={4}>Payment Methods</Title>
      <Radio.Group defaultValue={1}>
        <RadioWrapper>
          <Radio value={1}>
            <CustomedCreditCardOutlined />
            Credit Card
          </Radio>
          <Radio value={2}>KaKao Pay</Radio>
          <Radio value={3}>Naver Pay</Radio>
        </RadioWrapper>
      </Radio.Group>
    </FormContainer>
  );
};

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  & > label {
    margin-bottom: 1rem;

    @media screen and (max-width: 540px) {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 540px) {
    height: 200px;
  }
`;

const CustomedCreditCardOutlined = styled(CreditCardOutlined)`
  margin-right: 3px;
`;

export default PaymentMethod;
