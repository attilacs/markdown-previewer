import { createGlobalStyle } from "styled-components";

const AppStyled = createGlobalStyle`
body {
  background-color: #419BBE;
  color: #0B3241;
  font-family: sans-serif;
  margin: 0;
  overflow-x: hidden;
  padding: 10px;
  user-select: none;
}

img { display: block; margin: auto; max-width: 90%;}
`;

export default AppStyled;
