import styled from "styled-components";

export const BreadCrumbImg = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 39%,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url("https://source.unsplash.com/1600x900/?cooking"), #1c1c1c;
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

export const MiddleBox = styled.div`
  max-width: 600px;
  padding-left: 24px;
  padding-right: 24px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const BottomBox = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;