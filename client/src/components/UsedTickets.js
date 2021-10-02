import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Row, Col, Divider, Typography } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import baker from 'assets/baker.svg';
import { color } from 'styles/Theme';

const { Title } = Typography;

function UsedTickets() {
  const user = useSelector(state => state.user.userData);
  const history = user?.history;

  return (
    <>
      <Row>
        <Col span={24}>
          {history?.map((item, index) => (
            <div key={index}>
              <Order>
                <OrderDetails>
                  <Title level={4}>
                    <CheckCircleTwoTone twoToneColor={color.green} /> Order: #
                    {index + 1} - {item.id} (Used)
                  </Title>
                  <p>NAME: {item.name}</p>
                  <p>TOTAL: {item.price}원</p>
                </OrderDetails>
                <div>
                  <img src={baker} alt="baker" />
                </div>
              </Order>
              <Divider style={{ marginTop: 0 }} />
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
}

const Order = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;

  & > div > img {
    width: 80px;

    @media screen and (max-width: 640px) {
      display: none;
    }
  }
`;

const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 200px;

  & > h4 {
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }

  & > p {
    margin-bottom: 1rem;
  }
`;

export default UsedTickets;
