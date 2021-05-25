import React, { useState, useEffect } from "react";
import HostCard from "./Sections/HostCard";
import { Row } from "antd";
import Axios from "axios";
import HostTabs from "./Sections/HostTabs";
import { useRecoilState } from "recoil";
import { hostDetailState } from "../../../atoms/atoms";
import Loading from "../../Loading";

function HostDetailPage({ match, history }) {
  const API_HOST = "/api/hosts"; // 나중에 API는 API.js에서 한 군데로 모아보자..
  const hostsId = match.params.hostsId;

  // const [DetailHost, setDetailHost] = useState({});
  const [DetailHost, setDetailHost] = useRecoilState(hostDetailState);
  const [loading, setloading] = useState(true);

  const getHostDetail = async () => {
    try {
      const response = await Axios.get(
        `${API_HOST}/hosts_by_id?id=${hostsId}&type=single`
      );

      setDetailHost(response.data.host[0]);
      setloading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHostDetail();
  }, []);

  return (
    <>
      {/* Loading... */}
      {loading && <Loading />}

      {/* HostDetailPage */}
      {!loading && (
        <Row gutter={24}>
          {/* ---------------- Show Main Card ------------------ */}
          <HostCard url={match.url} detail={DetailHost} />
          {/* ---------------- Show Main Card ------------------ */}

          <HostTabs
            url={match.url}
            history={history}
            hostId={hostsId}
            detail={DetailHost}
          />
        </Row>
      )}
    </>
  );
}

export default HostDetailPage;
