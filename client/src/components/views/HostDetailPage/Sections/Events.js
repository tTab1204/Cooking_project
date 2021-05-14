import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

function Events({ hostId }) {
  const API_EVENTS = "/api/events";
  const variable = { host: hostId };

  const [HostEvents, setHostEvents] = useState([]);

  const LOCAL_ADDRESS = "http://localhost:5000/";

  const showHostEvent = async () => {
    try {
      const response = await Axios.post(
        `${API_EVENTS}/show-host-events`,
        variable
      );
      // console.log(response.data);
      setHostEvents(response.data.events);
    } catch {
      console.error();
    }
  };

  useEffect(() => {
    showHostEvent();
  }, []);

  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={[16, 16]}>
          {HostEvents.map((event, index) => (
            <Col lg={8} md={12} xs={24} key={index}>
              <Link to={`/events/${event._id}`}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="event"
                      src={`${LOCAL_ADDRESS}${event.images[0]}`}
                    />
                  }
                >
                  <Meta title={event.name} description={event.location} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Events;
