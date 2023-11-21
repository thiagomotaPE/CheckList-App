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
export const TaskModalContainer = styled.form`
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
export const TitleTaskModal = styled.input`
    height: 10%;
    margin-bottom: 20px;

    background-color: var(--backgroundColor);
    border: none;
    border-bottom: 1px solid var(--contrastColor);

    font-family: var(--secondFont);
    font-size: 20px;
`
export const DescriptionTaskModal =  styled.textarea`
    height: 40%;

    background-color: transparent;
    border: 1px solid var(--contrastColor);
    border-radius: 5px;
    font-family: var(--secondFont);
    font-size: 25px;
    font-weight: 400;
    padding: 10px;
`
export const Checkbox = styled.div`
    position: relative;
    top: 50px;

    label {
        padding: 15px;
        cursor: pointer;
    }
    input {
        appearance: none;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        border: 2px solid var(--contrastColor);
        outline: none;
        cursor: pointer;

        position: relative;
    }
    input:before {
        content: '';
        position: absolute;

        width: 2px;
        height: 2px;
        top: 1.5px;
        left: 1.5px;
        opacity: 0;
        border-radius: 50px;
        border: 4px solid var(--contrastColor);

        transition: 0.2s all linear;
    }
    input:checked:before {
        opacity: 1;
    }
    input:focus {
        box-shadow: 0 0 5px var(--contrastColor);
    }
    span{
        margin-left: 10px;
        font-family: var(--secondFont);
        font-size: 20px;
    }
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