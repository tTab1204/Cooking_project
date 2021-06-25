import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardNameWrapper = styled.div`
  display: flex;
  margin: 0px auto;
  padding-left: 0px;
  padding-top: 10px;
  flex-flow: column nowrap;
`;

export const CardName = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
`;

export const Order = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  grid-gap: 2.5rem;
  gap: 2.5rem;
  margin: 0 auto 2rem;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 200px;

  & > h4 {
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }
`;
