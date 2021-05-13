import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
const { Meta } = Card;

function Events({ hostId }) {
  const API_EVENTS = "/api/events";
  const variable = { partyHost: hostId };

  const [HostEvents, setHostEvents] = useState([]);

  const showHostEvent = async () => {
    try {
      const response = await Axios.post(
        `${API_EVENTS}/show-host-events`,
        variable
      );
      console.log(response.data);
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
          {/*-------------- 반복되는부분--------------- */}
          <Col lg={8} md={12} xs={24}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          {/*-------------- 반복되는부분--------------- */}
          <Col lg={8} md={12} xs={24}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col lg={8} md={12} xs={24}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Events;
