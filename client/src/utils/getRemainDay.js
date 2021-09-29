import moment from 'moment';

const now = moment().startOf('day');

const calculateRemainDay = eventDate => {
  return moment
    .duration(moment(`${eventDate}`, 'YYYY-MM-DD').diff(now))
    .asDays();
};

export const getRemainDay = eventDate => {
  let remainDay = calculateRemainDay(eventDate);

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
  let expiredEvents = events.filter(event => {
    let remainDay = calculateRemainDay(event.date);
    return remainDay < 0;
  });

  return expiredEvents;
};

export const getOnGoingEvents = events => {
  let onGoingEvents = events.filter(event => {
    let remainDay = calculateRemainDay(event.date);
    return remainDay >= 0;
  });
  return onGoingEvents;
};
