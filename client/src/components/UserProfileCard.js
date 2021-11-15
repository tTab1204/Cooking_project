import React from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row } from 'antd';

const UserProfileCard = () => {
  return (
    <>
      <Row>
        <Col xs={24} md={7}>
          <Card style={{ border: 'none' }} bodyStyle={cardBodyStyle}>
            <Row>
              <Col xs={10} md={24}>
                <AvatarWrapper>
                  <Avatar
                    size={{
                      xs: 24,
                      sm: 32,
                      md: 40,
                      lg: 64,
                      xl: 80,
                      xxl: 100,
                    }}
                    style={cardAvatarStyle}
                    icon={<UserOutlined />}
                  />
                </AvatarWrapper>
              </Col>
              <Col xs={14} md={24} style={{ display: 'flex' }}>
                <CardNameWrapper>
                  <CardName>{userName}</CardName>
                  <Link
                    to={`/users/${userName}`}
                    style={{ textAlign: 'center' }}
                  >
                    @{userName}
                  </Link>
                </CardNameWrapper>
              </Col>
            </Row>
            <Divider style={{ margin: '12px 0px' }} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

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

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardNameWrapper = styled.div`
  display: flex;
  margin: 0px auto;
  padding-left: 0px;
  padding-top: 10px;
  flex-flow: column nowrap;
`;

const CardName = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
`;

export default UserProfileCard;
