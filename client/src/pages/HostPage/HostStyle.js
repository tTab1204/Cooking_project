import styled from 'styled-components';

export const HostCardContainer = styled.div`
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

export const HostCardWrapper = styled.div`
  max-width: 1000px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const HostCarouselCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: rgb(0 0 0 / 15%) 0px 3px 6px 0px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: rgb(0 0 0 / 30%) 0px 3px 6px 0px;
    transition: all 0.3s ease-in-out;
  }
`;

export const HostCardIcon = styled.img`
  height: 150px;
  width: 160px;
  margin-bottom: 10px;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const HostCardH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
export const HostCardP = styled.p`
  height: 1.4rem;
  font-size: 1rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FollowAndLikeBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  width: 100%;
  max-width: 200px;
`;
export const FollowBox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;
