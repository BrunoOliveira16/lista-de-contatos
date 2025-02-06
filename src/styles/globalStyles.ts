import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://raw.githubusercontent.com/BrunoOliveira16/Curso-Engenheiro-Front-End-EBAC/main/Modulo-32/ImagesListaDeContatos/background-image.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  a {
    text-decoration: none;
  }
`
