import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

body,
input,
textarea,
select,
button {
  font-family: "Mulish", sans-serif;
}

`
