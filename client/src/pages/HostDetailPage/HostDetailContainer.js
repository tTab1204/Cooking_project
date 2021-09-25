import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useRecoilState } from 'recoil';
import { hostDetailState } from 'atoms/atoms';
import Loading from 'components/Loading/Loading';
import HostDetailPresenter from './HostDetailPresenter';

function HostDetailContainer({ match, history }) {
  const API_HOST = '/api/hosts'; // 나중에 API는 API.js에서 한 군데로 모아보자..
  const hostId = match.params.hostsId;
  const url = match.url;

  const [DetailHost, setDetailHost] = useRecoilState(hostDetailState);
  const [loading, setloading] = useState(true);

  const getHostDetail = async () => {
    try {
      const response = await Axios.get(
        `${API_HOST}/hosts_by_id?id=${hostId}&type=single`,
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
        <HostDetailPresenter
          url={url}
          history={history}
          DetailHost={DetailHost}
          hostId={hostId}
        />
      )}
    </>
  );
}

export default HostDetailContainer;
