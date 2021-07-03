import React from 'react';
import { Alert, Typography } from 'antd';
import {
  LandingPageContainer,
  TopBoxPanel,
  TopBoxPanels,
  TopBoxContent,
  TopBoxImg,
  TopButton,
  MiddleBox,
  VisionTextBox,
  VisionParagraph,
  MiddleButton,
  BottomBox,
  MissionFlexContainer,
  MissionInfoBox,
  MissionInfoImg,
  MissionInfoParagraph,
} from './LandingStyle';
import { HeartFilled } from '@ant-design/icons';
import ramen from '../../Images/ramen.svg';
import man_chef from '../../Images/man_chef.svg';
import kitchen from '../../Images/kitchen.svg';
import cutlery from '../../Images/cutlery.svg';
import ChefOutlined from '../../Images/ChefOutlined.svg';
import restaurant from '../../Images/restaurant.svg';
import { EVENTS_CLIENT, KITCHNES_CLIENT, HOST_CLIENT } from '../../Config';

const { Title } = Typography;

function LandingPage() {
  return (
    <>
      <div style={{ padding: '0px' }}>
        <Alert
          type='success'
          message='Love cooking and want to host your own pop-up? Contact us on ken44929@gmail.com! '
          icon={<HeartFilled />}
          showIcon
          closable
        />
        <LandingPageContainer>
          <TopBoxPanels>
            <TopBoxPanel
              style={{
                backgroundColor: 'rgb(255, 236, 184)',
                animationDelay: '0.1s',
              }}
            >
              <TopBoxContent style={{ animationDelay: '0.8s' }}>
                <TopBoxImg src={ramen} alt='street_food' />
                <TopButton to={EVENTS_CLIENT}>Find Events</TopButton>
              </TopBoxContent>
            </TopBoxPanel>
            <TopBoxPanel style={{ backgroundColor: 'skyblue', animationDelay: '0.3s' }}>
              <TopBoxContent style={{ animationDelay: '1s' }}>
                <TopBoxImg src={man_chef} alt='street_food' />
                <TopButton to={HOST_CLIENT}>See Our Hosts</TopButton>
              </TopBoxContent>
            </TopBoxPanel>
            <TopBoxPanel
              style={{
                backgroundColor: 'rgb(183, 222, 210)',
                animationDelay: '0.5s',
              }}
            >
              <TopBoxContent style={{ animationDelay: '1.2s' }}>
                {' '}
                <TopBoxImg src={kitchen} alt='street_food' />
                <TopButton to={KITCHNES_CLIENT}>Provide Kitchens</TopButton>
              </TopBoxContent>
            </TopBoxPanel>
          </TopBoxPanels>
        </LandingPageContainer>
        <MiddleBox>
          <VisionTextBox>
            <Title style={{ color: '#e7e7e7', fontWeight: '700' }}>Our Story</Title>
            <VisionParagraph>
              Cooking은 요리를 좋아하는, 즐기는 사람들을 위한 요리 공유 플랫폼입니다. Cooking은
              자신의 요리를 대접하기를 좋아하던 한 사람의 아이디어에서 성장했습니다. Cooking은 가정
              요리사에서 전문 요리사에 이르기까지 모든 사람을 지원하고 좋은 음식을 찾는 사람들에게
              최고의 요리사와 공간을 제공합니다.
            </VisionParagraph>
            <MiddleButton to={EVENTS_CLIENT}>요리 찾아보기</MiddleButton>
          </VisionTextBox>
        </MiddleBox>
        <BottomBox>
          <div>
            <Title
              style={{
                fontWeight: '700',
                textAlign: 'center',
              }}
            >
              Our Mission
            </Title>
          </div>
          <MissionFlexContainer>
            <MissionInfoBox>
              <MissionInfoImg src={cutlery} />
              <Title level={4} style={{ marginTop: '10px' }}>
                좋은 요리를 위해
              </Title>
              <MissionInfoParagraph>
                좋은 음식과 최고의 요리사를 <br /> 함께 만나보세요.
              </MissionInfoParagraph>
            </MissionInfoBox>
            <MissionInfoBox>
              <MissionInfoImg src={ChefOutlined} />
              <Title level={4} style={{ marginTop: '10px' }}>
                요리사를 위해
              </Title>
              <MissionInfoParagraph>
                자신만의 브랜드를 <br /> 만들어보세요.
              </MissionInfoParagraph>
            </MissionInfoBox>
            <MissionInfoBox>
              <MissionInfoImg src={restaurant} />
              <Title level={4} style={{ marginTop: '10px' }}>
                음식점을 위해
              </Title>
              <MissionInfoParagraph>
                수익을 다양화하고 <br /> 재능 있는 요리사와 함께하세요.
              </MissionInfoParagraph>
            </MissionInfoBox>
          </MissionFlexContainer>
        </BottomBox>
      </div>
    </>
  );
}

export default LandingPage;
