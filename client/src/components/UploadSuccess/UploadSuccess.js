import React from 'react';
import { Row, Col, Result } from 'antd';
import { MiddleBox } from 'pages/UploadEventPage/UploadEventStyle';

const UploadSuccess = () => {
  return (
    <>
      <Row type="flex">
        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <MiddleBox>
            <Result
              status="success"
              title="Successfully upload the information in DB"
            />
          </MiddleBox>
        </Col>
      </Row>
    </>
  );
};

export default UploadSuccess;
