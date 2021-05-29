import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loading from "../../Loading";
import EventPresenter from "./EventPresenter";

function EventContainer() {
  const [Events, setEvents] = useState([]);
  const [loading, setloading] = useState(true);
  const [SearchTerm, setSearchTerm] = useState("");

  const showEvents = async (body) => {
    try {
      const response = await Axios.post("/api/events/show-events", body);
      setEvents(response.data.events);
      setloading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const updateSearchTerm = (newSearchTerm) => {
    let body = {
      searchTerm: newSearchTerm,
    };

    setSearchTerm(newSearchTerm);
    showEvents(body);
  };

  useEffect(() => {
    showEvents();
  }, []);

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <EventPresenter Events={Events} updateSearchTerm={updateSearchTerm} />
      )}
    </>
  );
}

export default EventContainer;
