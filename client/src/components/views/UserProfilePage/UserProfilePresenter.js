import React from 'react';
import { Row, Col, Card, Avatar, Divider, Tabs, Typography } from 'antd';
import { UserOutlined, CheckCircleFilled, CheckCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { AvatarWrapper, CardNameWrapper, CardName, Order, OrderDetails } from './UserProfileStyle';
import baker from '../../Images/baker.svg';

const { TabPane } = Tabs;
const { Title } = Typography;

const cardBodyStyle = {
  maxWidth: '350px',
  margin: '0px auto',
};

const cardAvatarStyle = {
  width: '100px',
  height: '100px',
  lineHeight: '100px',
  fontSize: '50px',
};

function UserProfilePresenter({ userName, history }) {
  return (
    <>
      <Row gutter={24} style={{ marginTop: '20px' }}>
        <Col xs={24} md={7}>
          <Card style={{ border: 'none' }} bodyStyle={cardBodyStyle}>
            <Row>
              <Col xs={10} md={24}>
                <AvatarWrapper>
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    style={cardAvatarStyle}
                    icon={<UserOutlined />}
                  />
                </AvatarWrapper>
              </Col>
              <Col xs={14} md={24} style={{ display: 'flex' }}>
                <CardNameWrapper>
                  <CardName>{userName}</CardName>
                  <Link to={`/users/${userName}`} style={{ textAlign: 'center' }}>
                    @{userName}
                  </Link>
                </CardNameWrapper>
              </Col>
            </Row>
            <Divider style={{ margin: '12px 0px' }} />
          </Card>
        </Col>

        {/* Orders */}
        <Col xs={24} md={17}>
          <Tabs defaultActiveKey='1' style={{ background: 'rgb(255, 255, 255)', padding: '0px 20px' }}>
            <TabPane
              tab={
                <span>
                  <CheckCircleFilled />
                  Payments
                </span>
              }
              key='1'
            >
              {history?.map(() => (
                <>
                  <Order>
                    <OrderDetails>
                      <Title level={4}>
                        <CheckCircleTwoTone twoToneColor='#52c41a' /> Order: #60d2f5139757b50004f47908
                      </Title>
                      <p>NAME: Akaps' party</p>
                      <p>TOTAL: 20000원</p>
                    </OrderDetails>
                    <div>
                      <img src={baker} alt='baker' style={{ width: '80px' }} />
                    </div>
                  </Order>
                  <Divider style={{ marginTop: 0 }} />
                </>
              ))}
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}

export default UserProfilePresenter;
