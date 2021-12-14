import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Typography } from 'antd';
import HostCard from 'components/HostCard';
import Loading from 'components/Loading';
import { SHOW_HOSTS } from 'utils/api';

const { Title } = Typography;

function HostPage() {
  const [hosts, setHosts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios.get(SHOW_HOSTS).then(response => {
      if (response.data.success) {
        setHosts(response.data.hosts);
        setloading(false);
      } else alert('호스트 정보를 가져오는데 실패하였습니다.');
    });
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <Title level={1} style={{ marginTop: '20px' }}>
            Hosts
          </Title>
          <HostCardContainer>
            <HostCardWrapper>
              {hosts.map(host => (
                <HostCard host={host} key={host._id} />
              ))}
            </HostCardWrapper>
          </HostCardContainer>
        </>
      )}
    </>
  );
}

const HostCardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const HostCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export default HostPage;
