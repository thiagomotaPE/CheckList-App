import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --lettersColor: rgba(255, 255, 255, 0.87);
        --backgroundColor: #242424;
        --backgroundColor2: #343432;
        --hoverTaskCard: #2a2a28;
        --contrastColor: #ff1f1f;

        --destaqueFont: 'Koulen';
        --secondFont: 'Abel';
    }
    *{
        color: var(--lettersColor);

        font-size: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    textarea:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        border-bottom: solid 1px var(--contrastColor);
        outline: 0;
    }
    .container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 10vh 80vh 10vh;
    }

    ::-webkit-scrollbar{
        background-color: var(--backgroundColor2);
        width: 6px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--contrastColor);
        border-radius: 50px;
    }
`
