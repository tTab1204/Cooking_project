import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loading from "../../../Loading";
import { EVENTS_SERVER } from "../../../Config";
import HostEventsPresenter from "./HostEventsPresenter";

function Events({ hostId }) {
  const variable = { host: hostId };

  const [HostEvents, setHostEvents] = useState([]);
  const [loading, setloading] = useState(true);

  const showHostEvent = async () => {
    try {
      const response = await Axios.post(
        `${EVENTS_SERVER}/show-host-events`,
        variable
      );
      // console.log(response.data);
      setHostEvents(response.data.events);
      setloading(false);
    } catch {
      console.error();
    }
  };

  useEffect(() => {
    showHostEvent();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && <HostEventsPresenter HostEvents={HostEvents} />}
    </>
  );
}

export default Events;
