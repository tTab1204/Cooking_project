import styled from 'styled-components';

export const CartContainer = styled.div`
  border: 3px solid pink;
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  grid-gap: 30px;
  gap: 30px;
  align-items: center;
  width: 100%;
`;

export const CartImage = styled.div`
  border: 3px solid green;
`;

export const CartItems = styled.div`
  border: 3px solid black;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
  height: 100%;

  & > div {
    width: 100%;
  }
`;
