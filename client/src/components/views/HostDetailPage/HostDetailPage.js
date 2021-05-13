import React, { useState, useEffect } from "react";
import HostCard from "./Sections/HostCard";
import { Row } from "antd";
import Axios from "axios";
import HostTabs from "./Sections/HostTabs";
import { useRecoilState } from "recoil";
import { hostDetailState } from "../../../atoms/atoms";
import Loading from "../../Loading";

function HostDetailPage({ match, history }) {
  const hostsId = match.params.hostsId;

  // const [DetailHost, setDetailHost] = useState({});
  const [DetailHost, setDetailHost] = useRecoilState(hostDetailState);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    Axios.get(`/api/hosts/hosts_by_id?id=${hostsId}&type=single`)
      .then((response) => {
        setDetailHost(response.data.host[0]);
        setloading(false);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      <div className="app">
        {/* Loading... */}
        {loading && <Loading />}

        {/* HostDetailPage */}
        {!loading && (
          <Row gutter={24}>
            {/* ---------------- Show Main Card ------------------ */}
            <HostCard url={match.url} detail={DetailHost} />
            {/* ---------------- Show Main Card ------------------ */}

            <HostTabs url={match.url} history={history} hostId={hostsId} />
          </Row>
        )}
      </div>
    </>
  );
}

export default HostDetailPage;
