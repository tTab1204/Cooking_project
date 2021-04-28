import React, { useState, useEffect } from "react";
import Events from "./Events";
import Reviews from "./Reviews";
import Followers from "./Followers";
import { Row, Col, Tabs } from "antd";

import { Switch, Link } from "react-router-dom";
const { TabPane } = Tabs;

function HostTabs(props) {
  const hostsId = props.hostsId;

  return (
    <>
      <Col className="gutter-row" xs={24} md={17}>
        <Tabs defaultActiveKey="events">
          {/* Events */}
          <TabPane
            tab={<Link to={`/hosts/${hostsId}/`}>Events</Link>}
            key="events"
          >
            <Events />
          </TabPane>

          {/* Reviews */}
          <TabPane
            tab={<Link to={`/hosts/${hostsId}/`}>Reviews</Link>}
            key="reviews"
          >
            <Reviews />
          </TabPane>

          {/* Followers */}
          <TabPane
            tab={<Link to={`/hosts/${hostsId}/`}>Followers</Link>}
            key="followers"
          >
            <Followers />
          </TabPane>
        </Tabs>
      </Col>
    </>
  );
}

export default HostTabs;
