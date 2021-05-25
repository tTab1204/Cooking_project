import styled from "styled-components";

export const WholeCardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const WholeCardWrapper = styled.div`
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: relative;

  box-shadow: rgb(0 0 0 / 15%) 0px 3px 6px 0px;
  border-radius: 30px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: rgb(248, 248, 248);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    z-index: 2;
  }

  &:hover:before {
    opacity: 0.8;
  }

  &:hover CardHoverEffect {
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
`;

export const CardCover = styled.img`
  height: 200px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom: 10px;
`;

export const CardBody = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: rgb(46, 46, 46);
  width: 100%;
  min-height: 58px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 180%;
  padding: 0px 18px 0px 17px;
  margin-top: 10px;
`;

export const CardTitle = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;
export const CardText = styled.div`
  text-align: right;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;
