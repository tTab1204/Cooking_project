import styled from "styled-components";

export const BottomButtonBox = styled.div`
  padding: 16px;
  width: 100%;
  text-align: center;
`;

export const CardImageStyle = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const InnerModalBox = styled.div`
  min-width: auto;
  width: auto;
  height: 100%;
  position: relative;
  display: flex;
`;

export const ModalImage = styled.img`
  object-fit: contain;
  height: auto;
  width: auto;
  max-height: 100%;
  max-width: 100%;
`;

export const LeftDirectionBox = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
`;

export const RightDirectionBox = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
`;
