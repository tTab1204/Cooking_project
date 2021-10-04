import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Loading from 'components/Loading';
import KitchenDetailPresenter from './KitchenDetailPresenter';
import { SHOW_KITCHEN_DETAIL } from 'utils/api';

function KitchenDetailContainer({ match }) {
  const kitchenId = match.params.kitchensId;
  const [loading, setloading] = useState(true);
  const [DetailKitchen, setDetailKitchen] = useState({});
  const [ShowSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    Axios.get(SHOW_KITCHEN_DETAIL(kitchenId))
      .then(response => {
        setDetailKitchen(response.data.kitchen[0]);
        setloading(false);
      })
      .catch(err => alert(err));
  }, []);

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          <KitchenDetailPresenter
            DetailKitchen={DetailKitchen}
            ShowSuccess={ShowSuccess}
            setShowSuccess={setShowSuccess}
          />
        </>
      )}
    </>
  );
}
export default KitchenDetailContainer;
