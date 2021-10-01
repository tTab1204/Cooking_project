import React from 'react';
import styled from 'styled-components';

const IconText = ({ icon, text }) => {
  return (
    <TextContainer>
      <span>{React.createElement(icon)}</span>
      {text}
    </TextContainer>
  );
};

const TextContainer = styled.div`
  cursor: default;

  & > span {
    padding-right: 5px;
  }
`;

export default IconText;
