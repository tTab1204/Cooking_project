import styled from 'styled-components';

export const BreadCrumbImg = styled.div`
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

export const AddressAndCapacityWrapper = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.85);
  padding-right: 10px;
`;

export const PriceWrapper = styled.div`
  border: 1px solid rgb(221, 221, 221);
  padding: 16px;
  width: 100%;
  flex-direction: column;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
