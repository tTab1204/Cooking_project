import React, { useState, useEffect } from "react";
import HostCard from "./Sections/HostCard";
import { Row, Col, Tabs } from "antd";
import Axios from "axios";
import HostTabs from "./Sections/HostTabs";

function HostDetailPage(props) {
  const hostsId = props.match.params.hostsId;

  const [DetailHost, setDetailHost] = useState({});

  useEffect(() => {
    Axios.get(`/api/hosts/hosts_by_id?id=${hostsId}&type=single`)
      .then((response) => {
        setDetailHost(response.data.host[0]);
      })
      .catch((err) => alert(err));
  }, []);

  const handleTabClick = () => {};

  return (
    <div className="app">
      <Row gutter={24}>
        {/* ---------------- Show Main Card ------------------ */}
        <HostCard detail={DetailHost} />

        {/* ---------------- Show Main Card ------------------ */}
        <HostTabs hostsId={hostsId} />
      </Row>
    </div>
  );
}

export default HostDetailPage;
