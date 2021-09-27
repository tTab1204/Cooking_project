import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Loading from 'components/Loading/Loading';
import China from 'assets/china.png';
import Korea from 'assets/south-korea.png';
import japan from 'assets/japan.png';
import Italy from 'assets/italy.png';
import HostPresenter from './HostPresenter';

const FOOD_NATION = {
  Korean: (
    <img src={Korea} style={{ maxWidth: '20px', marginLeft: '5px' }} alt="KR" />
  ),
  Japan: (
    <img src={japan} style={{ maxWidth: '20px', marginLeft: '5px' }} alt="JP" />
  ),
  Chinese: (
    <img src={China} style={{ maxWidth: '20px', marginLeft: '5px' }} alt="CN" />
  ),
  Western: (
    <img
      src={Italy}
      style={{ maxWidth: '20px', marginLeft: '5px' }}
      alt="ITALY"
    />
  ),
};

function HostContainer({ match }) {
  const url = match.url;
  const userId = localStorage.getItem('userId');

  const [Hosts, setHosts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    Axios.get('/api/hosts/showHosts').then(response => {
      if (response.data.success) {
        setHosts(response.data.hosts);
        setloading(false);
      } else {
        alert('호스트 정보를 가져오는데 실패하였습니다.');
      }
    });
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <HostPresenter
          Hosts={Hosts}
          FOOD_NATION={FOOD_NATION}
          url={url}
          userId={userId}
        />
      )}
    </>
  );
}

export default HostContainer;