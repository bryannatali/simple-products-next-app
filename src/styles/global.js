import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: '#fff';
  }

  body, input, textarea, button {
    font: 500 1rem Inter, sans-serif;
    color: '#808080';
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-family: Lexend, sans-serif;
    color: '#494D4B';
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`
export default GlobalStyle