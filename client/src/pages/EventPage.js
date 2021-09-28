import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Col, Typography } from 'antd';
import SearchBox from 'components/SearchBox';
import EventCard from 'components/EventCard';
import Loading from 'components/Loading';
import { DatePicker, Row } from 'antd';
import { getExpiredEvents, getOnGoingEvents } from 'utils/getRemainDay';

const { Title } = Typography;

function EventPage() {
  const [events, setEvents] = useState([]);
  const [loading, setloading] = useState(true);

  const [, setSearchTerm] = useState('');

  const showEvents = async body => {
    try {
      const response = await axios.post('/api/events/show-events', body);
      setEvents(response.data.events);
      setloading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const updateSearchTerm = newSearchTerm => {
    let body = { searchTerm: newSearchTerm };

    setSearchTerm(newSearchTerm);
    showEvents(body);
  };

  const onDateChange = (date, dateString) => {
    let body = { date: dateString };
    showEvents(body);
  };

  useEffect(() => {
    showEvents();
  }, []);

  let expiredEvents = getExpiredEvents(events);
  let onGoingEvents = getOnGoingEvents(events);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
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
          <EventCard events={onGoingEvents} />
          <HeaderContainer type="flex">
            <Col>
              <Title level={1}>Past Events</Title>
            </Col>
          </HeaderContainer>
          <EventCard events={expiredEvents} />
        </Container>
      )}
    </>
  );
}

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

  & > div {
    display: flex;
  }

  & > div > h1 {
    margin-bottom: 0;

    @media screen and (max-width: 580px) {
      margin-bottom: 0.5rem;
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 540px) {
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
  }
`;

export const CustomedDatePicker = styled(DatePicker)`
  padding-left: 2rem;
`;

export default EventPage;
