import styled from 'styled-components';

export const StepsAction = styled.div`
  margin-top: 24px;
`;
export const FormContainer = styled.div`
  margin: 4rem auto 0;
  max-width: 360px;
  padding: 0 1rem;
`;

export const ButtonWrapper = styled.div`
  margin: 4rem auto 0;
  max-width: 360px;
  padding: 0 1rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderContainer = styled.div`
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

export const OrderDetails = styled.div`
  width: 65%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const OrderItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  grid-gap: 1rem;
  gap: 1rem;

  & > img {
    width: 60px;
    display: block;
  }
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
  background: #fff;
  margin: 1em 0;
  padding-top: 1em;

  box-shadow: none;
  border-radius: 0.28571429rem;
  text-align: left;
  color: rgba(0, 0, 0, 0.87);
  border-collapse: separate;
  border-spacing: 0;

  & > tbody > tr > td {
    padding: 0.8em;
    text-align: inherit;
  }
`;
