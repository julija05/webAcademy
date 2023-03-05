import React from 'react';
import { createGlobalStyle } from 'styled-components';
import sample from '../../images/homeImage/background-video.mp4';

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin:0;
  }
  
  body {
    padding: 0;
    margin:0;
    background: linear-gradient(to right, #434343 0%, black 100%);
    font-family: 'Life Savers', cursive;
  }
`;


export default GlobalStyle;