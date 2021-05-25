import styled from "styled-components";

export const CardAvatarStyle = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    -webkit-box-pack: center;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
`;

export const TitleAndNationBox = styled.div`
  text-align: center;
  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    margin: auto 0px;
  }
`;

export const NationBox = styled.div`
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  height: 30px;
`;
