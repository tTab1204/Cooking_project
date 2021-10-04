import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Typography } from 'antd';
import { SHOW_KITCHENS } from 'utils/api';
import Cards from 'components/Cards';
import Loading from 'components/Loading';

const { Title } = Typography;

function KitchenPage({ match }) {
  const [kitchens, setKitchens] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios.get(SHOW_KITCHENS).then(response => {
      if (response.data.success) {
        setKitchens(response.data.kitchens);
        setloading(false);
      } else {
        alert('kitchens 정보를 가져오는데 실패하였습니다!');
      }
    });
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <CustomedTitle level={1}>Kitchens</CustomedTitle>
          <Cards datas={kitchens} url={match.url} />
        </>
      )}
    </>
  );
}

const CustomedTitle = styled(Title)`
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export default KitchenPage;
