import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin:0;
  }
  html{
    width:100%;
    height:100%;
    padding: 0;
    margin:0;
  }
  body {
    padding: 0;
    margin:0;
    font-family: 'Montserrat', sans-serif;
    width:100%;
    height:100%;
  }
`;


export default GlobalStyle;