import styled from "styled-components";

export const CardBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  padding: 16px;
  justify-content: space-between;
  border: 1px solid rgb(226, 226, 226);
`;

export const InnerCardBody = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`;

export const Menu = styled.strong`
  font-size: 16px;
  margin-bottom: 8px;
  white-space: pre-wrap;
`;

export const CardImageStyle = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
`;
