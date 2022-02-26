//styled
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Gothic A1', sans-serif;
}
body{   
    overflow-x: hidden;
        ::-webkit-scrollbar {
          width: 5px;
          cursor: pointer;
        }
        ::-webkit-scrollbar-thumb {
          background: #E6D764;
          border-radius: 50px;
          cursor: pointer;
        }
}
`;

export default GlobalStyle;
