import styled from "styled-components";
import { Card } from "antd";
export const BreadCrumbImg = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 39%,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(""), #1c1c1c;
  height: 400px;
  background-size: cover;
  background-position: center, center;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-left: 24px;
  padding-right: 24px;
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
