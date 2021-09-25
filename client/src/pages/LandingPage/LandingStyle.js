import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { color } from 'styles/Theme';

const { Title, Paragraph } = Typography;

export const LandingPageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const TopBoxPanels = styled.div`
  min-height: 95vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TopBoxPanel = styled.div`
  flex: 1 0;
  overflow: hidden;
  background-size: cover;
  background-position: 50%;
  transform-origin: 0 0;
  opacity: 0;
  -webkit-animation: bg 0.6s cubic-bezier(0.83, 0, 0.17, 1) forwards;
  animation: bg 0.6s cubic-bezier(0.83, 0, 0.17, 1) forwards;

  @keyframes bg {
    0% {
      transform: scaleY(0);
      opacity: 1;
    }

    100% {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;

export const TopBoxContent = styled.div`
  margin: auto 0;
  width: 100%;
  height: 100%;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  -webkit-animation: image 0.4s cubic-bezier(0.83, 0, 0.17, 1) forwards;
  animation: image 0.4s cubic-bezier(0.83, 0, 0.17, 1) forwards;

  @keyframes image {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const TopBoxImg = styled.img`
  width: 125px;
  height: 125px;
`;

export const TopButton = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 16px;
  background-color: transparent;
  text-transform: uppercase;
  border: 2px solid #1b1b1b;
  color: #1b1b1b;
  box-sizing: border-box;
  border-radius: 0;
  font-weight: 700;
  padding: min(20px, 20%) min(30px, 30%);
  margin-top: 40px;
  min-width: 200px;
  cursor: pointer;
  text-align: center;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  transition: 0.3s;
  z-index: 1;

  &:hover {
    transition: 0.3s;
    background-color: black;
    color: white;
  }
`;

export const MiddleBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${color.black};
  padding: 40px 0;
  width: 100%;
`;

export const VisionTextBox = styled.div`
  width: 100%;
  padding: 0 40px;
`;

export const VisionParagraph = styled(Paragraph)`
  color: #e7e7e7;
  vertical-align: inherit;
  font-size: 16px;
`;

export const MiddleButton = styled(Link)`
  display: inline-block;
  color: inherit;
  text-decoration: none;
  font-size: 14px;
  background-color: transparent;
  color: #e7e7e7;
  border: 2px solid #e7e7e7;
  border-radius: 0;
  box-sizing: border-box;
  font-weight: 700;
  background: transparent;
  padding: 7px 42px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;

  &:hover {
    transition: 0.3s;
    background-color: #e7e7e7;
    color: var(--black-color);
  }
`;

export const BottomBox = styled.div`
  background-color: #e7e7e7;
  color: var(--black-color);
  padding: 40px 0;
`;

export const MissionFlexContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  flex-direction: row;
  color: #1b1b1b;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MissionInfoBox = styled.div`
  display: flex;
  flex: 1 1; /* 증가너비 감소너비 - 33.3%씩 가져간다는 의미 */
  flex-direction: column;
  align-items: center;
  /* grid로 구현해도 될듯? flex가 아니라 */
`;

export const MissionInfoImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const MissionInfoParagraph = styled(Paragraph)`
  max-width: 200px;
  text-align: center;
`;
