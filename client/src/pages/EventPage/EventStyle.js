import styled from 'styled-components';
import { color } from 'styles/Theme';
import { DatePicker, Row } from 'antd';

export const Container = styled.div`
  @media screen and (max-width: 960px) {
    padding: 0 46px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const HeaderContainer = styled(Row)`
  margin-top: 2rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;

  & > div > h1 {
    margin-bottom: 0;

    @media screen and (max-width: 580px) {
      margin-bottom: 1rem;
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 540px) {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
`;

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

export const CustomedDatePicker = styled(DatePicker)`
  padding-left: 2rem;
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
  }
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 300px;
  position: relative;
  box-shadow: rgb(0 0 0 / 15%) 0px 3px 6px 0px;
  border-radius: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  background-color: rgb(248, 248, 248);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    height: 80px;
  }
`;

export const CardCover = styled.img`
  height: 200px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 80px;
    height: 80px;
  }
`;

export const CardBody = styled.div`
  font-weight: bold;
  color: ${color.black};
  width: 100%;
  min-height: 30px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 180%;
  padding: 0px 18px;

  @media screen and (max-width: 768px) {
    padding: 0.5rem 18px;
  }
`;

export const CardTitleWrapper = styled.div`
  width: 100%;
`;

export const CardTitle = styled.div`
  font-size: 1.1rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
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

  & > span {
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
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

  @media screen and (max-width: 768px) {
    display: none;
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

  & > span {
    margin-right: 5px;
  }

  & > .won {
    font-size: 0.8rem;
    color: ${color.text};
    margin-left: 2px;
  }
`;
