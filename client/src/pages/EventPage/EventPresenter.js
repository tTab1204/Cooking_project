import React from 'react';
import { Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { DollarCircleFilled, EnvironmentFilled } from '@ant-design/icons';
import {
  WholeCardContainer,
  WholeCardWrapper,
  EventCard,
  CardCover,
  CardBody,
  CardTitle,
  CardText,
  RemainDayBox,
  RemainDay,
  PriceAndTagBox,
  CardTitleWrapper,
  CustomedDatePicker,
  HeaderContainer,
  Container,
} from './EventStyle';
import SearchBox from 'components/SearchBox/SearchBox';
import { EVENTS_CLIENT, LOCAL_SERVER } from 'utils/config';
import moment from 'moment';
import { getRemainDay } from 'utils/getRemainDay';

const { Title } = Typography;

function EventPresenter({ Events, updateSearchTerm, onDateChange }) {
  return (
    <Container>
      <HeaderContainer type="flex">
        <Col>
          <Title level={1}>Events</Title>
        </Col>
        <Col>
          <SearchBox refreshFunction={updateSearchTerm} />
          <CustomedDatePicker onChange={onDateChange} />
        </Col>
      </HeaderContainer>

      <WholeCardContainer>
        <WholeCardWrapper>
          {Events.map((event, index) => (
            <Link to={`${EVENTS_CLIENT}/${event._id}`} key={index}>
              <EventCard className="card">
                <RemainDayBox>
                  <RemainDay>D-{getRemainDay(event.date)}</RemainDay>
                </RemainDayBox>
                <CardCover src={`${LOCAL_SERVER}${event.images[0]}`} />
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
              </EventCard>
            </Link>
          ))}
        </WholeCardWrapper>
      </WholeCardContainer>
    </Container>
  );
}

export default EventPresenter;
