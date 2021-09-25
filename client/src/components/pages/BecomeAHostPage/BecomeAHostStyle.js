import styled from 'styled-components';
import { becomeAHostImg } from 'components/utils/constants';
import { color } from 'styles/Theme';

export const BreadCrumbImg = styled.div`
  background: ${color.background_img}, url(${becomeAHostImg}), ${color.black};
  height: 450px;
  background-size: cover;
  background-position: center, center;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (max-width: 540px) {
    height: 25vh;
  }
`;

export const MiddleBox = styled.div`
  max-width: 600px;
  padding-left: 24px;
  padding-right: 24px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const BottomBox = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;
