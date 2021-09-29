import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { color } from './Theme';

export const GlobalStyle = createGlobalStyle` 
    ${reset}
   
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji','Segoe UI Emoji', 'Segoe UI Symbol';
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5;
        background-color: ${color.primary_background};
    }
    input, button {
        border: none;
        outline: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }

    .ant-statistic-content {
        display: flex;
        justify-content: center;
        font-size: 14px !important;
    }

    .ant-card-cover:hover img {
        transform: scale(1.01);
        box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px 0px;
        transition: transform 0.3s ease;
    }

    /* .ant-statistic-title {
        display: flex;
        justify-content: center;
    } */

    input.error {
        border-color: red;
    }

    .input-feedback {
        color: red;
        height: 5px;
        margin-top: -12px;
    }

    .ant-menu-sub {
        font-weight: 500;
    }
   
`;

// App.js
// export const AffixStyle = {
//   height: 40,
//   width: 40,
//   lineHeight: '40px',
//   borderRadius: 4,
//   backgroundColor: `${color.green_2}`,
//   color: `${color.white}`,
//   textAlign: 'center',
//   fontSize: 14,
// };

export const MainBox = styled.div`
  width: 100%;
  max-width: 1100px;
  padding-left: 46px;
  padding-right: 46px;
  margin: 0px auto 180px;

  @media screen and (max-width: 960px) {
    padding: 0;
  }
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
