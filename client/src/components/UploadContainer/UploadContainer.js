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
        <Title level={4} style={{ color: 'gray', paddingTop: '10px' }}>
          {title}
        </Title>
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
`;

export default UploadContainer;
