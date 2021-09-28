import moment from 'moment';

export const getRemainDay = eventDate => {
  const now = moment().startOf('day');

  const remainDay = moment
    .duration(moment(`${eventDate}`, 'YYYY-MM-DD').diff(now))
    .asDays();

  return remainDay;
};
