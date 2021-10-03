import React from 'react';
import styled from 'styled-components';
import { Typography, Divider } from 'antd';
import { CreditCardFilled } from '@ant-design/icons';
import { getImage } from 'utils/getImage';
import { color } from 'styles/Theme';

const { Title } = Typography;

const Order = ({ cartDetail, total }) => {
  return (
    <OrderContainer>
      <OrderDetails>
        <Title level={4}>PAYMENT METHOD</Title>
        <div>
          <CreditCardFilled /> Credit Card
        </div>
        <Divider />
        <Title level={4}>ORDER ITEM</Title>
        {cartDetail?.map(item => (
          <>
            <OrderItem>
              <div>
                <img
                  style={{ width: '60px', display: 'block' }}
                  src={getImage(item.images[0])}
                  alt="test_item"
                />
              </div>
              <OrderItemInfo>
                <div>{item.name}</div>
                <div>{`${item.quantity} x ${item.price}`}</div>
              </OrderItemInfo>
            </OrderItem>
            <Divider />
          </>
        ))}
      </OrderDetails>
      <OrderSummary>
        <Title level={4}>ORDER SUMMARY</Title>
        <OrderSummaryAmount>
          <OrderSummaryTable>
            <tbody>
              <tr>
                <td>Items: </td>
                <td className="item_price">{total}원</td>
              </tr>
              <tr>
                <td>Shipping & handling: </td>
                <td className="item_price">0원</td>
              </tr>
              <tr>
                <td>Tax: </td>
                <td className="item_price">0원</td>
              </tr>
              <tr>
                <td style={{ fontSize: '1.2rem' }}>Total: </td>
                <td className="item_price" style={{ fontSize: '1.2rem' }}>
                  {total}원
                </td>
              </tr>
            </tbody>
          </OrderSummaryTable>
        </OrderSummaryAmount>
      </OrderSummary>
    </OrderContainer>
  );
};

const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 4rem auto 0;
  padding: 0 2rem;
  max-width: 1400px;

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 1.5rem;
    flex-direction: column;
    grid-gap: 2rem;
    gap: 2rem;
  }
`;

const OrderDetails = styled.div`
  width: 65%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const OrderItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  grid-gap: 1rem;
  gap: 1rem;
`;

export const OrderItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 85%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const OrderSummaryAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
`;

export const OrderSummaryTable = styled.table`
  width: 100%;
  background: ${color.white};
  margin: 1em 0;
  padding-top: 1em;
  box-shadow: none;
  border-radius: 0.28571429rem;
  text-align: left;
  color: ${color.text};
  border-collapse: separate;
  border-spacing: 0;

  & > tbody > tr > td {
    padding: 0.8em;
    text-align: inherit;
    padding-left: 0;
    padding-right: 0;
  }

  & > tbody > tr > .item_price {
    text-align: right;
  }
`;

export default Order;
