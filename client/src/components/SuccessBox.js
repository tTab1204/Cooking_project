import React from 'react';
import styled from 'styled-components';
import { Col, Result } from 'antd';

const SuccessBox = () => {
  return (
    <Col lg={24} md={24} xs={24} style={colStyle}>
      <MiddleBox>
        <Result
          status="success"
          title="Successfully send the information"
          subTitle="It will take a few days to answer. Thank you for your decision!"
        />
      </MiddleBox>
    </Col>
  );
};

const MiddleBox = styled.div`
  max-width: 600px;
  padding-left: 24px;
  padding-right: 24px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const colStyle = {
  display: 'flex',
  justifyContent: 'center',
};

export default SuccessBox;
