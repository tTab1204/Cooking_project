import React from 'react';
import { Row, Col, Card, Avatar, Typography, Divider } from 'antd';
import { CardAvatarStyle, NationBox, TitleAndNationBox } from './HostCardStyle';
import China from 'assets/china.png';
import Korea from 'assets/south-korea.png';
import japan from 'assets/japan.png';
import FollowContainer from '../Follow/FollowContainer';

const { Title } = Typography;

const FOOD_NATION = {
  Korean: <img src={Korea} style={{ maxWidth: '20px' }} alt="KR" />,
  Japan: <img src={japan} style={{ maxWidth: '20px' }} alt="JP" />,
  Chinese: <img src={China} style={{ maxWidth: '20px' }} alt="CN" />,
};

function HostCardPresenter({ detail, url, userId }) {
  const { name, image, food_nation } = detail;

  return (
    <>
      <Col className="gutter-row" xs={24} md={7}>
        <Card
          hoverable={false}
          bordered={true}
          bodyStyle={{ maxWidth: '350px', margin: '0px auto' }}
        >
          <Row>
            <Col xs={10} md={24}>
              <CardAvatarStyle>
                <Avatar
                  style={{
                    borderRadius: '50%',
                    width: '150px',
                    height: '150px',
                  }}
                  src={`http://localhost:5000/${image[0]}`}
                  alt="host-main-image"
                />
              </CardAvatarStyle>
            </Col>
            <Col xs={14} md={24}>
              <TitleAndNationBox style={{ marginTop: '20px' }}>
                <Title level={2} style={{ marginBottom: '0px' }}>
                  {name}
                </Title>
                <NationBox>{FOOD_NATION[food_nation]}</NationBox>
              </TitleAndNationBox>
            </Col>
          </Row>

          <Divider />
          {/* Follow and Like */}
          <FollowContainer userFrom={userId} detail={detail} url={url} />
        </Card>
      </Col>
    </>
  );
}

export default HostCardPresenter;
