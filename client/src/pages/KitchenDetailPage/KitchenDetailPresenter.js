import React, { useState } from 'react';
import {
  Row,
  Col,
  Typography,
  Divider,
  Button,
  Descriptions,
  Card,
  Result,
  Modal,
  Form,
  Input,
} from 'antd';
import {
  BreadCrumbImg,
  AddressAndCapacityWrapper,
  PriceWrapper,
} from './KitchenDetailStyle';
import { EnvironmentOutlined, TeamOutlined } from '@ant-design/icons';
import { LOCAL_SERVER } from 'utils/config';

const { Title, Paragraph } = Typography;

// --------------- style --------------------//

const imageStyle = {
  minWidth: 'auto',
  width: 'auto',
  border: 'none',
};

const smallPriceStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginTop: '10px',
};

const buttonStyle = {
  fontWeight: 'bold',
  marginTop: '20px',
  width: '90%',
};

// ------------------------------------------- //

function KitchenDetailPresenter({
  DetailKitchen,
  ShowSuccess,
  successMessage,
}) {
  const [ShowModal, setShowModal] = useState(false);

  const { images, name, address, capacity, description, rent_price } =
    DetailKitchen;

  const onHandleModal = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const onSubmit = () => {
    successMessage();

    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  // console.log("이미지 경로: ", `${LOCAL_SERVER}${images[0]}`);

  return (
    <>
      <>
        <BreadCrumbImg>
          <img src={`${LOCAL_SERVER}${images[0]}`} alt="kitchen_main_image" />
        </BreadCrumbImg>
        <Row gutter={[12]}>
          <Col xs={24} sm={24} md={16} style={{ marginTop: '20px' }}>
            <div>
              <AddressAndCapacityWrapper>
                <span style={{ marginRight: '4px' }}>
                  <EnvironmentOutlined />
                </span>
                <span>{address}</span>
              </AddressAndCapacityWrapper>
              <AddressAndCapacityWrapper>
                <span style={{ marginRight: '4px' }}>
                  <TeamOutlined />
                </span>
                <span>{capacity}</span>
              </AddressAndCapacityWrapper>
              <Title level={1} style={{ margin: '5px 0px' }}>
                {name}
              </Title>
            </div>
            <Divider />
            <Paragraph>{description}</Paragraph>
            <Divider />
            <Descriptions title="address">
              <Descriptions.Item>{address}</Descriptions.Item>
            </Descriptions>
            <Divider />
            {/* Images */}
            <Title level={2}>Images</Title>
            <div style={{ width: '100%' }}>
              <Row gutter={[8, 8]}>
                {images &&
                  images.map((image, index) => (
                    <Col
                      key={index}
                      className="gutter-row"
                      lg={6}
                      md={12}
                      sm={24}
                    >
                      <Card
                        hoverable={true}
                        bodyStyle={{ padding: '0' }}
                        style={imageStyle}
                        cover={
                          <img
                            alt="kitchen-detail-images"
                            src={`${LOCAL_SERVER}${image}`}
                          />
                        }
                      ></Card>
                    </Col>
                  ))}
              </Row>
            </div>
          </Col>
          <Col lg={8} md={8} sm={24}>
            <PriceWrapper>
              {ShowSuccess && (
                <Result
                  status="success"
                  title="Successfully send the information"
                  subTitle="The answer will come soon."
                />
              )}

              {!ShowSuccess && (
                <Row gutter={[12]}>
                  <Col md={24} xl={24}>
                    <Title level={4}>Full Rental</Title>
                  </Col>
                  <Col md={24} xl={24} style={smallPriceStyle}>
                    {rent_price}원 / 일
                  </Col>
                  <Button
                    type="primary"
                    size="large"
                    style={buttonStyle}
                    onClick={onHandleModal}
                  >
                    Contact
                  </Button>
                </Row>
              )}
            </PriceWrapper>
          </Col>
        </Row>
      </>

      <Modal
        title="Contact Us"
        visible={ShowModal}
        // confirmLoading={confirmLoading}
        footer={null}
        style={{ fontSize: '1.4rem' }}
        onCancel={handleCancel}
      >
        <Form layout="vertical">
          <p style={{ marginBottom: '1em', lineHeight: '200%' }}>
            Thank you for your interest in {name}. If you send us your e-mail,
            we'll get back to you as soon as possible!
          </p>
          <Form.Item label="Email" required>
            <Input
              placeholder="paka123@naver.com"
              style={{ marginBottom: '1.5rem' }}
            />
            <Button
              type="primary"
              size="large"
              style={{ width: '100%' }}
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default KitchenDetailPresenter;
