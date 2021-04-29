import React, { useState, useEffect } from "react";
import HostCard from "./Sections/HostCard";
import { Row, Col, Tabs } from "antd";
import Axios from "axios";
import HostTabs from "./Sections/HostTabs";
import Events from "./Sections/Events";
import Reviews from "./Sections/Reviews";
import Followers from "./Sections/Followers";
import { Link, Route } from "react-router-dom";

const { TabPane } = Tabs;
function HostDetailPage({ match, history }) {
  const hostsId = match.params.hostsId;

  const [Loading, setLoading] = useState(true);
  const [DetailHost, setDetailHost] = useState({});

  useEffect(() => {
    Axios.get(`/api/hosts/hosts_by_id?id=${hostsId}&type=single`)
      .then((response) => {
        setDetailHost(response.data.host[0]);
      })
      .catch((err) => alert(err));
  }, []);

  const onHandleTab = (key) => {
    history.push(`/hosts/${hostsId}/${key}`);
  };

  return (
    <div className="app">
      <Row gutter={24}>
        {/* ---------------- Show Main Card ------------------ */}
        <HostCard detail={DetailHost} />

        {/* ---------------- Show Main Card ------------------ */}
        <HostTabs hostsId={hostsId} />
        <Route path={`/hosts/${hostsId}/:tab`} component={HostTabs} />
      </Row>
    </div>
  );
}

export default HostDetailPage;
