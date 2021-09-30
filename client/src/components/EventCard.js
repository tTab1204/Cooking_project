import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { EVENTS_CLIENT } from 'utils/config';
import { getRemainDay, isExpired } from 'utils/getRemainDay';
import { DollarCircleFilled, EnvironmentFilled } from '@ant-design/icons';
import { color } from 'styles/Theme';
import { getImage } from 'utils/getImage';

const EventCard = ({ events }) => {
  return (
    <WholeCardContainer>
      <WholeCardWrapper>
        {events.map((event, index) => {
          let isExpiredEvent = isExpired(event.date);

          return (
            <Link to={`${EVENTS_CLIENT}/${event._id}`} key={index}>
              <Card isEventExpired={isExpiredEvent}>
                <RemainDayBox>
                  <RemainDay>{getRemainDay(event.date)}</RemainDay>
                </RemainDayBox>
                <CardCover
                  isEventExpired={isExpiredEvent}
                  src={getImage(event.images[0])}
                />
                <CardBody>
                  <CardTitleWrapper>
                    <CardTitle>{event.name}</CardTitle>
                  </CardTitleWrapper>
                  <CardText>
                    <EnvironmentFilled />
                    {event.time}, {event.location}
                  </CardText>
                  <PriceAndTagBox>
                    <DollarCircleFilled />
                    {event.price}
                    <span className="won">원</span>
                  </PriceAndTagBox>
                </CardBody>
              </Card>
            </Link>
          );
        })}
      </WholeCardWrapper>
    </WholeCardContainer>
  );
};

const WholeCardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const WholeCardWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ host }) => (host ? '1fr 1fr ' : '1fr 1fr 1fr')};
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

const Card = styled.div`
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
    opacity: ${({ isEventExpired }) => (isEventExpired ? '0.4' : '')};
  }
`;

const CardCover = styled.img`
  height: 200px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom: 10px;
  opacity: ${({ isEventExpired }) => (isEventExpired ? '0.4' : '')};

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 80px;
    height: 80px;
  }
`;

const CardBody = styled.div`
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

const CardTitleWrapper = styled.div`
  width: 100%;
`;

const CardTitle = styled.div`
  font-size: 1.1rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    width: 240px;
  }
`;
const CardText = styled.div`
  color: ${color.green_2};
  width: 100%;
  font-size: 0.8rem;
  text-align: right;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & > span {
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    text-align: left;
  }

  @media screen and (max-width: 480px) {
    width: 240px;
  }
`;

const RemainDayBox = styled.div`
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

const RemainDay = styled.div`
  width: 100%;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  word-spacing: 5px;
`;

const PriceAndTagBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  line-height: 100%;
  margin-top: 1rem;

  & > span {
    margin-right: 5px;
  }

  & > .won {
    font-size: 0.8rem;
    color: ${color.text};
    margin-left: 2px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export default EventCard;
