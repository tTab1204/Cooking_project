import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Loading from 'components/Loading';
import KitchenPresenter from './KitchenPresenter';

function KitchenContainer() {
  const [Kitchens, setKitchens] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    Axios.get('/api/kitchens/showKitchens').then(response => {
      if (response.data.success) {
        setKitchens(response.data.kitchens);
        setloading(false);
      } else {
        alert('kitchens 정보를 가져오는데 실패하였습니다.');
      }
    });
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && <KitchenPresenter Kitchens={Kitchens} />}
    </>
  );
}

export default KitchenContainer;
