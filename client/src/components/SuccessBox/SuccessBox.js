import React from 'react';
import { Col, Result } from 'antd';
import { MiddleBox, colStyle } from './SuccessBoxStyle';

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

export default SuccessBox;
