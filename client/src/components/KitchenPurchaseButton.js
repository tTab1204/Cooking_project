import React from 'react';
import { Button, Col, Result, Row, Typography } from 'antd';
import styled from 'styled-components';
import { color } from 'styles/Theme';
import { showModalState } from 'atoms/atoms';
import { useRecoilState } from 'recoil';

const { Title } = Typography;

const KitchenPurchaseButton = ({ showSuccess, rent_price }) => {
  const [, setShowModal] = useRecoilState(showModalState);
  const onHandleModal = () => setShowModal(true);

  return (
    <Col lg={8} md={8} sm={24}>
      <PriceWrapper>
        {showSuccess && (
          <Result
            status="success"
            title="Successfully send the information"
            subTitle="The answer will come soon."
          />
        )}

        {!showSuccess && (
          <Row gutter={[12]}>
            <Col md={24} xl={24}>
              <Title level={4}>Full Rental</Title>
            </Col>
            <CustomedCol md={24} xl={24}>
              {rent_price}원 / 일
            </CustomedCol>
            <CustomedButton type="primary" size="large" onClick={onHandleModal}>
              Contact
            </CustomedButton>
          </Row>
        )}
      </PriceWrapper>
    </Col>
  );
};

const PriceWrapper = styled.div`
  border: 1px solid ${color.lightGray};
  padding: 16px;
  width: 100%;
  flex-direction: column;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const CustomedCol = styled(Col)`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;

const CustomedButton = styled(Button)`
  font-weight: bold;
  margin-top: 20px;
  width: 90%;
`;

export default KitchenPurchaseButton;
