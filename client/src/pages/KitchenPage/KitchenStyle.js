import styled from 'styled-components';
import { color } from 'styles/Theme';

export const WholeCardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const WholeCardWrapper = styled.div`
  max-width: ${({ host }) => (host ? '707px' : '1000px')};
  display: grid;
  grid-template-columns: ${({ host }) => (host ? '1fr 1fr' : '1fr 1fr 1fr')};
  align-items: center;
  grid-gap: 30px;
  margin-bottom: ${({ host }) => (host ? '20px' : '0px')};

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 300px;
  position: relative;

  box-shadow: rgb(0 0 0 / 15%) 0px 3px 6px 0px;
  border-radius: 30px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: rgb(248, 248, 248);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
  }

  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    z-index: 2;
  }

  &:hover:before {
    opacity: 0.7;
  }

  &:hover CardHoverEffect {
    opacity: 1;
    transition: all 0.2s ease-in-out;
  } */
`;

export const CardCover = styled.img`
  height: 200px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom: 10px;
`;

export const CardBody = styled.div`
  font-weight: bold;
  color: rgb(46, 46, 46);
  width: 100%;
  min-height: 30px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 180%;
  padding: 0px 18px 0px 17px;
`;

export const CardTitle = styled.div`
  font-size: 1.1rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;
export const CardText = styled.div`
  color: ${color.green_2};
  font-size: 0.8rem;
  margin-top: 5px;
  text-align: right;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RemainDayBox = styled.div`
  border: 3px solid black;
  user-select: none;
  z-index: 10;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.533);
  border-radius: 14px;
  margin-top: 16px;
  margin-left: 16px;
  padding: 6px 10px;
  font-size: 17px;
  color: rgb(93, 93, 93);
  border: 0.5px solid rgba(248, 248, 248, 0.333);
  transition: all 200ms ease-in-out 0s;

  &:hover {
    color: var(--primary-color3);
    transition: all 0.2s ease-in-out;
  }
`;

export const RemainDay = styled.div`
  width: 100%;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  word-spacing: 5px;
`;

export const PriceAndTagBox = styled.div`
  display: flex;
  justify-content: flex-end;
  line-height: 100%;
  margin: 7px 0px 0px 8px;
`;
