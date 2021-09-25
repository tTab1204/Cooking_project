import React from 'react';
import ImageUpload from 'components/ImageUpload/ImageUpload';
import { MiddleBox } from 'pages/UploadEventPage/UploadEventStyle';
import { Alert, Row, Col, Typography, Input, Select, Form, Button } from 'antd';

const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const UploadHostPresenter = ({
  onSubmit,
  onNameChange,
  onEmailChange,
  onKitchen_ExChange,
  onDepositChange,
  onDescriptionChange,
  onFood_nationChange,
  Description,
  Images,
  refreshFunction,
  url,
}) => {
  return (
    <>
      <Row type="flex">
        <Col
          lg={24}
          md={24}
          xs={24}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <MiddleBox>
            <Alert
              message="Invite Only"
              description="Currently, we are operating on invite-only. Feel free to leave your contact information to be contacted in the future."
              type="info"
              showIcon
            />
            <Title level={4} style={{ color: 'gray', paddingTop: '10px' }}>
              Tell us a little about yourself
            </Title>
            <Form onSubmit={onSubmit}>
              {/* Name */}
              <Input placeholder="Name" size="large" onChange={onNameChange} />
              <br />
              <br />
              {/* Email */}
              <Input
                placeholder="Email"
                size="large"
                onChange={onEmailChange}
              />
              <br />
              <br />
              {/* deposit */}
              <Input
                placeholder="deposit number"
                size="large"
                onChange={onDepositChange}
              />
              <br />
              <br />
              {/* Food-Nation */}
              <Select
                labelInValue
                noStyle
                size="large"
                placeholder="food_nation"
                onChange={onFood_nationChange}
              >
                <Option value="Korean">Korean</Option>
                <Option value="Japan">Japan</Option>
                <Option value="Chinese">Chinese</Option>
                <Option value="Western">Western</Option>
              </Select>
              <br />
              <br />
              {/* Kitchen_Experience */}
              <Select
                labelInValue
                noStyle
                size="large"
                placeholder="Previous industrial kitchen experience"
                onChange={onKitchen_ExChange}
              >
                <Option value="None">None</Option>
                <Option value="Less than a year">Less than a year</Option>
                <Option value="More than a year">More than a year</Option>
              </Select>
              <br />
              <br />
              {/* Description */}
              <TextArea
                placeholder="Please write down short description about yourself"
                onChange={onDescriptionChange}
                value={Description}
              />
              <br />
              <br />
              {/* Image Upload */}

              <ImageUpload
                refreshFunction={refreshFunction}
                refreshImages={Images}
                url={url}
              />
              <br />
              <br />
              {/* Submit Button */}
              <Button
                onClick={onSubmit}
                size="large"
                type="primary"
                style={{ width: '100%' }}
              >
                I'm intersted
              </Button>
            </Form>
          </MiddleBox>
        </Col>
      </Row>
    </>
  );
};

export default UploadHostPresenter;
