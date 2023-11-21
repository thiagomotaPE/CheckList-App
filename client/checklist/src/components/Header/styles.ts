import styled from 'styled-components'

export const Container  = styled.header`
    background-color: var(--backgroundColor);

    width: 100%;
    height: 100%;
    padding-top: 10px;


    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;  
`
export const LogoArea = styled.div`
    margin-top: 10px;
`
export const Logo = styled.h1`
    font-family: var(--destaqueFont);
    font-size: 40px;
    font-weight: 400;
    text-shadow: 0px 3px 5px var(--contrastColor);
    transition-duration: 0.5s;

    &:hover{
        transition-duration: 0.5s;
        text-shadow: 0px 3px 15px var(--contrastColor); 
    }
    &::before {
        content: '';
        position: absolute;
        transition: 0.6s;
    }

    &:hover::before {
        scale: 3;
    }
    
    &:hover {
        scale: 1.1;
    }
`
export const NavigateArea = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    //tela smartphone
    @media (max-width: 750px) {
        display: none;
    }
`
export const SearchArea = styled.input`
    height: 30px;
    width: 500px;

    background-color: var(--backgroundColor);
    border: none;
    border-bottom: solid 2px var(--contrastColor);
    color: var(--lettersColor);

    font-family: var(--secondFont);
    font-size: 20px;

    //tela notbook
    @media (max-width: 1625px) {
        width: 410px;
    }
`
export const NewTaskArea = styled.div`
    margin-top: 10px;
    display: flex;
`
export const Button = styled.button`
    cursor: pointer;
    position: relative;
    padding: 5px 20px;
    font-family: var(--secondFont);
    font-size: 18px;
    color: var(--lettersColor);
    border: 2px solid var(--contrastColor);
    border-radius: 34px;
    background-color: transparent;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        margin: auto;
        border-radius: inherit;
        scale: 0;
        z-index: -1;
        background-color: var(--contrastColor);
        transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    }

    &:hover::before {
        scale: 3;
    }
      
    &:hover {
        scale: 1.1;
    }
      
    &:active {
        scale: 1;
    }
`
export const AccountArea = styled.div`
    background-color: var(--contrastColor);
    width: 40px;
    height: 40px;
    position: relative;

    border-radius: 50px;
    margin-left: 50px;
    padding: 10px;

    ul{
        display: none;
    }
    &:hover{
        ul{
            display: flex;
        }
    }

    //tela smartphone
    @media (max-width: 750px) {
        margin-left: 25px;
    }
`
export const Perfil = styled.ul`
    background-color: var(--contrastColor);
    flex-direction: column;

    width: 150px;
    height: 250px;
    
    margin-top: 13px;
    margin-left: -10px;
    list-style: none;
    //tela smartphone
    @media (max-width: 750px) {
        margin-left: -120px;
    }
    li{
        position: relative;
        display: inline-block;

        width: 100%;
        height 100%;
        padding: 15px;

        font-family: var(--secondFont);
        &:hover{
            background-color: #f24949;
        }
    }
`