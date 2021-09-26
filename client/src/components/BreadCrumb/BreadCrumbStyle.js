import styled from 'styled-components';
import { color } from 'styles/Theme';

export const BreadCrumbImg = styled.div`
  background: ${({ img }) =>
    img && `${color.background_img}, url(${img}), ${color.black}`};
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

  & > h1 {
    color: white;
  }
`;
