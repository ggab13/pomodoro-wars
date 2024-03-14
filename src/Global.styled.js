import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
body {
  margin: 0 auto;   
    text-align: center;
    font-family: 'Carter One', cursive;  
    background-color: ${({ theme }) => theme.mainColor};
    color: white;

    h1 {
     
     
    
    }
}
`;
