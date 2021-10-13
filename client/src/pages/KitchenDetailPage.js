import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import KitchenInfo from 'components/KitchenInfo';
import KitchenImages from 'components/KitchenImages';
import KitchenPurchaseButton from 'components/KitchenPurchaseButton';
import KitchenDetailModal from 'components/KitchenDetailModal';
import Loading from 'components/Loading';
import { getImage } from 'utils/getImage';
import { SHOW_KITCHEN_DETAIL } from 'utils/api';

function KitchenDetailPage({ match }) {
  const kitchenId = match.params.kitchensId;

  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setloading] = useState(true);
  const [detailKitchen, setDetailKitchen] = useState({});

  useEffect(() => {
    axios
      .get(SHOW_KITCHEN_DETAIL(kitchenId))
      .then(response => {
        setDetailKitchen(response.data.kitchen[0]);
        setloading(false);
      })
      .catch(err => alert(err));
  }, []);

  const { images, name, rent_price } = detailKitchen;

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          <BreadCrumbImg>
            <img src={getImage(images[0])} alt="kitchen_main_image" />
          </BreadCrumbImg>
          <Row gutter={[12]}>
            <Col xs={24} sm={24} md={16} style={{ marginTop: '20px' }}>
              <KitchenInfo detail={detailKitchen} />
              <KitchenImages images={images} />
            </Col>
            <KitchenPurchaseButton
              showSuccess={showSuccess}
              rent_price={rent_price}
            />
          </Row>

          <KitchenDetailModal name={name} setShowSuccess={setShowSuccess} />
        </>
      )}
    </>
  );
}

const BreadCrumbImg = styled.div`
  min-width: 200px;
  width: 100%;
  height: 40vh;
  position: relative;
  display: flex;

  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 540px) {
    height: 20vh;
  }
`;

export default KitchenDetailPage;
