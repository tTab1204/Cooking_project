import React from 'react';
import styled from 'styled-components';
import { Form, Typography, Input } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const Message = () => {
  return (
    <FormContainer>
      <Title level={4}>Enter your wishes to your host</Title>
      <Form colon={false}>
        <Form.Item>
          <TextArea />
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export const FormContainer = styled.div`
  margin: 4rem auto 0;
  max-width: 360px;
  padding: 0 1rem;

  @media screen and (max-width: 540px) {
    margin: 1rem auto 0;
  }

  & > form > div > div > div > span > textarea {
    min-height: 200px;

    @media screen and (max-width: 540px) {
      min-height: 300px;
      font-size: 1.2rem;
    }
  }
`;

export default Message;
