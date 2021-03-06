import styled from 'styled-components';

export const DropzoneBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const DropzoneContainer = styled.div`
  width: 100%;
  height: 150px;
  border: 3px dashed lightgray;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const DropzoneTitle = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 540px) {
    & > h4 {
      font-size: 1rem;
    }
  }
`;

export const ImagesContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  list-style: none;
  line-height: 1.5715;
`;

export const MenuImageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 66px;
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  margin-bottom: 5px;
`;

export const MenuImageWrapper = styled.div`
  height: 100%;
  padding: 0 4px;
  display: flex;
  align-items: center;
  //  transition: background-color .3s;
`;

export const MenuImage = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  overflow: hidden;
`;

export const MenuImageTitle = styled.span`
  flex: auto;
  color: #7cb305;
  padding: 0 15px;
`;
