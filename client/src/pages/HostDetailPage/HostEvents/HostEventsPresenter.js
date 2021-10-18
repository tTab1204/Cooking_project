import React from 'react';
import { ROUTES } from 'utils/routes';
import Cards from 'components/Cards';

function HostEventsPresenter({ HostEvents }) {
  return <Cards datas={HostEvents} url={ROUTES.EVENTS.MAIN} />;
}

export default HostEventsPresenter;
