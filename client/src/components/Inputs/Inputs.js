import React from 'react';
import { Button, Col, Form, Input, Typography } from 'antd';
import {
  MiddleBox,
  inputStyle,
  titleStyle,
  colStyle,
  buttonStyle,
} from './InputsStyle';
import AlertBox from 'components/AlertBox/AlertBox';
import SelectBox from 'components/SelectBox/SelectBox';

const { Title } = Typography;

const Inputs = ({
  page,
  onNameChange,
  onEmailChange,
  onSelectChange,
  onSubmit,
}) => {
  const { optionValue, placeholder } = page;

  return (
    <Col span={24} style={colStyle}>
      <MiddleBox>
        <AlertBox />
        <Title level={4} style={titleStyle}>
          Tell us a little about yourself
        </Title>
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="Name"
            size="large"
            onChange={onNameChange}
            style={inputStyle}
          />
          <Input
            placeholder="Email"
            size="large"
            onChange={onEmailChange}
            style={inputStyle}
          />
          <SelectBox
            optionValue={optionValue}
            placeholder={placeholder}
            onSelectChange={onSelectChange}
          />

          <Button
            onClick={onSubmit}
            size="large"
            type="primary"
            style={buttonStyle}
          >
            I'm intersted
          </Button>
        </Form>
      </MiddleBox>
    </Col>
  );
};

export default Inputs;
