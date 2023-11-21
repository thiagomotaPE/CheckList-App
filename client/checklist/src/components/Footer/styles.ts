import styled from "styled-components";

export const Container  = styled.footer`
    background-color: var(--backgroundColor);

    width: 100%;
    height: 100%;
    
`
export const Rights = styled.p`
    color: var(--lettersColor);
    font-family: var(--secondFont);
    font-size: 13px;

    text-align: center;
    opacity: 0.3;
`
export const SocialMidia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px;

    i{
        margin: 5px;
    }
`