import React, { useState, useEffect } from "react";
import HostCard from "./Sections/HostCard";
import Axios from "axios";

function HostDetailPage(props) {
  const hostsId = props.match.params.hostsId;

  const [DetailHost, setDetailHost] = useState({});

  useEffect(() => {
    Axios.get(`/api/hosts/hosts_by_id?id=${hostsId}&type=single`)
      .then((response) => {
        console.log(response.data.host[0]);
        setDetailHost(response.data.host[0]);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="app">
      {/* ---------------- Show Main Card ------------------ */}
      <HostCard detail={DetailHost} />

      {/* ---------------- Show Main Card ------------------ */}
    </div>
  );
}

export default HostDetailPage;
