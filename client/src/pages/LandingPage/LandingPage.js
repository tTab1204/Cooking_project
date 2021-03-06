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
import ramen from 'assets/ramen.svg';
import man_chef from 'assets/man_chef.svg';
import kitchen from 'assets/kitchen.svg';
import cutlery from 'assets/cutlery.svg';
import ChefOutlined from 'assets/ChefOutlined.svg';
import restaurant from 'assets/restaurant.svg';
import { EVENTS_CLIENT, KITCHNES_CLIENT, HOST_CLIENT } from 'utils/config';

const { Title } = Typography;

function LandingPage() {
  return (
    <>
      <div style={{ padding: '0px' }}>
        <Alert
          type="success"
          message="Love cooking and want to host your own pop-up? Contact us on ken44929@gmail.com! "
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
                <TopBoxImg src={ramen} alt="street_food" />
                <TopButton to={EVENTS_CLIENT}>Find Events</TopButton>
              </TopBoxContent>
            </TopBoxPanel>
            <TopBoxPanel
              style={{ backgroundColor: 'skyblue', animationDelay: '0.3s' }}
            >
              <TopBoxContent style={{ animationDelay: '1s' }}>
                <TopBoxImg src={man_chef} alt="street_food" />
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
                <TopBoxImg src={kitchen} alt="street_food" />
                <TopButton to={KITCHNES_CLIENT}>Provide Kitchens</TopButton>
              </TopBoxContent>
            </TopBoxPanel>
          </TopBoxPanels>
        </LandingPageContainer>
        <MiddleBox>
          <VisionTextBox>
            <Title style={{ color: '#e7e7e7', fontWeight: '700' }}>
              Our Story
            </Title>
            <VisionParagraph>
              Cooking??? ????????? ????????????, ????????? ???????????? ?????? ?????? ??????
              ??????????????????. Cooking??? ????????? ????????? ??????????????? ???????????? ???
              ????????? ?????????????????? ??????????????????. Cooking??? ?????? ??????????????? ??????
              ???????????? ??????????????? ?????? ????????? ???????????? ?????? ????????? ??????
              ??????????????? ????????? ???????????? ????????? ???????????????.
            </VisionParagraph>
            <MiddleButton to={EVENTS_CLIENT}>?????? ????????????</MiddleButton>
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
                ?????? ????????? ??????
              </Title>
              <MissionInfoParagraph>
                ?????? ????????? ????????? ???????????? <br /> ?????? ???????????????.
              </MissionInfoParagraph>
            </MissionInfoBox>
            <MissionInfoBox>
              <MissionInfoImg src={ChefOutlined} />
              <Title level={4} style={{ marginTop: '10px' }}>
                ???????????? ??????
              </Title>
              <MissionInfoParagraph>
                ???????????? ???????????? <br /> ??????????????????.
              </MissionInfoParagraph>
            </MissionInfoBox>
            <MissionInfoBox>
              <MissionInfoImg src={restaurant} />
              <Title level={4} style={{ marginTop: '10px' }}>
                ???????????? ??????
              </Title>
              <MissionInfoParagraph>
                ????????? ??????????????? <br /> ?????? ?????? ???????????? ???????????????.
              </MissionInfoParagraph>
            </MissionInfoBox>
          </MissionFlexContainer>
        </BottomBox>
      </div>
    </>
  );
}

export default LandingPage;
