import React from 'react';
import {
  Row,
  Col,
  Typography,
  Input,
  Form,
  Button,
  DatePicker,
  Alert,
} from 'antd';
import { MiddleBox } from './UploadEventStyle';
import ImageUpload from 'components/ImageUpload/ImageUpload';

const { Title } = Typography;
const { TextArea } = Input;

function UploadEventPresenter({
  onSubmit,
  onNameChange,
  onTimeChange,
  onLocationChange,
  onPriceChange,
  onDescriptionChange,
  onDateChange,
  Description,
  refreshFunction,
  Images,
  url,
}) {
  return (
    <>
      <Row type="flex">
        {/*------------------- Inputs -----------------------*/}
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
              Information
            </Title>
            <Form onSubmit={onSubmit}>
              {/* Name */}
              <Input placeholder="Name" size="large" onChange={onNameChange} />
              <br />
              <br />
              {/* Time */}
              <Input placeholder="Time" size="large" onChange={onTimeChange} />
              <br />
              <br />
              {/* Location */}
              <Input
                placeholder="Location"
                size="large"
                onChange={onLocationChange}
              />
              <br />
              <br />

              {/* Price */}
              <Input
                placeholder="Price"
                size="large"
                suffix="원"
                onChange={onPriceChange}
              />
              <br />
              <br />

              {/* Description */}
              <TextArea
                placeholder="Please write down short description"
                onChange={onDescriptionChange}
                value={Description}
              />
              <br />
              <br />

              <Title level={4} style={{ color: 'gray' }}>
                Select Your Event Day
              </Title>
              <DatePicker onChange={onDateChange} />

              <br />
              <br />
              <ImageUpload
                refreshFunction={refreshFunction}
                refreshImages={Images}
                url={url}
              />

              {/* Submit Button */}
              <Button
                onClick={onSubmit}
                size="large"
                type="primary"
                style={{ width: '100%' }}
              >
                Submit
              </Button>
            </Form>
          </MiddleBox>
        </Col>
      </Row>
    </>
  );
}

export default UploadEventPresenter;
