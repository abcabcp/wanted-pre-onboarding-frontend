import { createGlobalStyle } from 'styled-components';
import { font } from './font';

const GlobalStyle = createGlobalStyle`

  ${font}

  :root {
    --gray1: #8F8F8F;
    --gray2: #464646;
    --gray3: #181818;

    --primary-100: #a9c8f8;
    --primary-200: #98bdf6;
    --primary-300: #7eadf4;

    --error: #cc5965;

    --white: #ffffff;
    --black: #000000;
  }

  * {
    margin: 0;
    padding: 0;
  
  }

  html {
    font-family: 'Pretendard';
    font-size: 8px;

    @media (max-width: 500px) {
      width: 100vw;
      height: 100vh;
      font-size: 1.6vw;
    }
  }
  
  body {
    padding: 5rem;
    background-color: var(--primary-100);
  }

  h1 {
    font-size: 4rem;
  }

  ul,
  li {
    list-style: none;
  }

  textarea,
  keygen,
  select,
  button {
    font-family: inherit;
    font-size: inherit;
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  
  //중앙 정렬
  & .text-center {
    text-align: center;
  }

  //커서 pointer
  & .cursor-pointer {
    cursor: pointer;
  }


  //* 복사 금지
  & .stop-dragging {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  input, textarea {
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }

  
`;

export default GlobalStyle;
