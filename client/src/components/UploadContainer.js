import React from 'react';
import styled from 'styled-components';
import { Col, Row, Typography } from 'antd';
import AlertBox from 'components/AlertBox/AlertBox';

const { Title } = Typography;

const UploadContainer = ({ title, children }) => {
  return (
    <Container>
      <Wrapper>
        <AlertBox />
        <Title level={4}>{title}</Title>
        {children}
      </Wrapper>
    </Container>
  );
};

const Container = styled(Row)`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled(Col)`
  width: 60%;
  padding-top: 3rem;

  @media screen and (max-width: 960px) {
    width: 85%;
  }

  @media screen and (max-width: 540px) {
    width: 95%;
    padding-top: 1rem;
  }

  & > form > input {
    margin-bottom: 1.2rem;
  }

  & > form > .ant-select {
    margin-bottom: 1.2rem;
  }

  & > form > .ant-input-affix-wrapper {
    margin-bottom: 1.2rem;
  }

  & > form > .ant-calendar-picker {
    margin-bottom: 1.2rem;
  }

  & > form > button {
    width: 100%;
  }

  & > h4 {
    color: gray;
    padding-top: 10px;
  }

  & > form > h4 {
    color: gray;
    padding-top: 10px;
  }
`;

export default UploadContainer;
