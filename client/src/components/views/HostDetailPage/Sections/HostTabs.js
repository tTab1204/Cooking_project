import React, { useState, useEffect } from "react";
import Events from "./Events";
import Reviews from "./Reviews";
import Followers from "./Followers";
import { Row, Col, Tabs } from "antd";

import { Switch, Link } from "react-router-dom";
const { TabPane } = Tabs;

function HostTabs({ match, history }) {
  const onHandleTab = (key) => {
    // history.push(`/hosts/${hostsId}/${key}`);
  };

  return (
    <>
      <Col className="gutter-row" xs={24} md={17}>
        <Tabs defaultActiveKey="events" onChange={onHandleTab}>
          {/* Events */}
          <TabPane tab="Events" key="events">
            {/* <Events /> */}
            <p>Events</p>
            <p>Events</p>
            <p>Events</p>
          </TabPane>

          {/* Reviews */}
          <TabPane tab="Reviews" key="reviews">
            {/* <Reviews /> */}
            <p>Reviews</p>
            <p>Reviews</p>
            <p>Reviews</p>
          </TabPane>

          {/* Followers */}
          <TabPane tab="Followers" key="followers">
            {/* <Followers /> */}
          </TabPane>
        </Tabs>
      </Col>
    </>
  );
}

export default HostTabs;
