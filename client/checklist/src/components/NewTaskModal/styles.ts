import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,0.6);
    overflow: hidden;
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: end;

    z-index: 999;
`
export const NewTaskContainer = styled.form`
    background-color: var(--backgroundColor);
    padding: 24px;
    height: 100%;
    width: 50%;
    
    display: flex;
    flex-direction: column;
`
export const Title = styled.h2`
    font-family: var(--destaqueFont);
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 20px;
`
export const TitleNewTask = styled.input`
    height: 10%;
    margin-bottom: 20px;
    font-weight: 400;

    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--contrastColor);

    font-family: var(--secondFont);
    font-size: 25px;
`
export const DescriptionNewTask =  styled.textarea`
    height: 40%;

    background-color: transparent;
    border: 1px solid var(--contrastColor);
    border-radius: 5px;
    font-family: var(--secondFont);
    font-size: 25px;
    font-weight: 400;
`
export const ButtonsArea = styled.div`
    margin-top: 55%;
`
export const Button = styled.button`
    cursor: pointer;
    position: relative;
    padding: 5px 20px;
    min-width: 90px;
    margin-right: 10px;
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
        width: 50px;
        height: 50px;
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