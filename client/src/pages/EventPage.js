import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Col, Typography } from 'antd';
import SearchBox from 'components/SearchBox';
import Cards from 'components/Cards';
import Loading from 'components/Loading';
import { DatePicker, Row } from 'antd';
import { getExpiredEvents, getOnGoingEvents } from 'utils/getRemainDay';
import { SHOW_EVENTS } from 'utils/api';

const { Title } = Typography;

function EventPage({ match }) {
  const [events, setEvents] = useState([]);
  const [loading, setloading] = useState(true);

  const [, setSearchTerm] = useState('');

  const showEvents = async body => {
    try {
      const response = await axios.post(SHOW_EVENTS, body);
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
        <>
          <HeaderContainer type="flex">
            <Col>
              <Title level={1}>Events</Title>
            </Col>
            <Col>
              <SearchBox refreshFunction={updateSearchTerm} />
              <CustomedDatePicker onChange={onDateChange} />
            </Col>
          </HeaderContainer>
          <Cards datas={onGoingEvents} url={match.url} />
          <HeaderContainer type="flex">
            <Col>
              <Title level={1}>Past Events</Title>
            </Col>
          </HeaderContainer>
          <Cards datas={expiredEvents} url={match.url} />
        </>
      )}
    </>
  );
}

const HeaderContainer = styled(Row)`
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

const CustomedDatePicker = styled(DatePicker)`
  padding-left: 2rem;
`;

export default EventPage;
