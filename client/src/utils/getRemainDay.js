import moment from 'moment';

export const getRemainDay = eventDate => {
  const now = moment().startOf('day');

  let remainDay = moment
    .duration(moment(`${eventDate}`, 'YYYY-MM-DD').diff(now))
    .asDays();

  if (remainDay === 0) remainDay = 'Today!';
  else if (remainDay < 0) {
    remainDay = 'Event Ended';
  } else {
    remainDay = `D-${remainDay}`;
  }
  return remainDay;
};

export const isExpired = eventDate => getRemainDay(eventDate) === 'Event Ended';

export const getExpiredEvents = events => {
  const now = new Date();
  let expiredEvents = events.filter(event => new Date(event.date) < now);

  return expiredEvents;
};

export const getOnGoingEvents = events => {
  const now = new Date();
  let onGoingEvents = events.filter(event => new Date(event.date) >= now);

  return onGoingEvents;
};
