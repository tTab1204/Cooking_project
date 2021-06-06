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

export const CardMenu = styled.strong`
  font-size: 16px;
  margin-bottom: 8px;
  white-space: pre-wrap;
`;

export const MenuFooter = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 16px;
`;

export const BottomButtonBox = styled.div`
  padding: 16px 0;
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

export const MainImgWrapper = styled.div`
  min-width: 200px;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 75%;
  display: flex;
  border: none;
`;

export const MenuImageWrapper = styled.div`
  min-width: 200px;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 75%;
  display: flex;
`;

export const DescriptionContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DescriptionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 12px;
`;

export const DescriptionFollowers = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
`;

export const MenuImageStyle = styled.img`
  height: 200px;
`;

export const AffixBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 16px;
  width: 100%;
  text-align: center;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.05) 0px -2px 0px;
`;
