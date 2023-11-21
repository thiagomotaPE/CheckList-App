import styled from "styled-components";
import BackgroundImg from  '../../assets/backgroundAccount2.jpg'

export const Container  = styled.div`
    background-color: var(--backgroundColor);

    height: 100vh;

    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
`
export const Image  = styled.div`
    background-image: url(${BackgroundImg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    
    width: 55%;
    height: 150%;
    position: relative;
    right: -150px;
    box-shadow: -20px 0px 45px 0px rgba(0, 0, 0, 0.25);
    transform: rotate(-17deg);

    //tela notbook
    @media (max-width: 1625px) {
        width: 70%;
        right: -170px;
    }

    //tela tablet
    @media (max-width: 1100px) {
        width: 200%;
        height: 200%;
        right: -500px;
        transform: rotate(-30deg);
    }
`
export const Slogan = styled.h1`
    color: #FFF;

    position: relative;
    right: 50px;
    margin-top: 35%;
    margin-left: 22%;
    margin-right: 15%;
    transform: rotate(17deg);

    font-family: var(--destaqueFont);
    font-size: 6rem;
    font-weight: 400;

    //tela notbook
    @media (max-width: 1625px) {
        margin-top: 28%;
        margin-left: 20%;
        font-size: 4.5rem;
    }

    //tela tablet
    @media (max-width: 1100px) {
        display: none;
    }
`
export const AccountContainer  = styled.div`
    position:relative;

    max-width: 30%;
    min-width: 30%;
    max-height: 70%;
    min-height: 70%;

    margin-right: 5%;
    margin-left: 2%;
    padding: 20px;

    //tela notbook
    @media (max-width: 1625px) {
        min-height: 80%;
        padding: 15px;
        margin-left: 3%;

        label {
            font-size: 20px;
        }
    }

    //tela tablet e celular
    @media (max-width: 1100px) {
        background-color: var(--backgroundColor);
        min-width: 70%;
        min-height: 80%;
        max-width: 50%;
        max-height: 80%;

        display: flex;
        justify-content: center;

        border-radius: 10px;
        box-shadow: 10px 10px 25px 3px black;
        
        position: absolute;
        z-index: 1;
    }
`
export const FormContainer  = styled.form`
   display: flex;
   flex-direction: column;
   align-items: start;

   //tela tablet e celular
    @media (max-width: 1100px) {
        position: absolute;
        padding-left: 15%;
        padding-right: 15%;
        max-width: 500px;
        min-width: 300px;
        align-items: center;
    }
`
export const FormTitle  = styled.h1`
   font-family: var(--destaqueFont);
   font-size: 6rem;
   font-weight: 400;

   //tela notbook
    @media (max-width: 1625px) {
        font-size: 4rem;
    }
`
export const RegisterLine = styled.div`
    background-color: var(--contrastColor);
    width: 105px;
    height: 4px;
    position: absolute;
    top: 25%;

    //tela notbook
    @media (max-width: 1625px) {
        width: 75px;
        height: 4px;
        position: absolute;
        top: 22%;
    }

    //tela tablet
    @media (max-width: 1100px) {
        position: absolute;
        margin: 13%;
        top: 9%;
    }

    //tela smartphone
        @media (max-width: 750px) {
            top: 12%;
        }
`
export const OtherOptions  = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   width: 110%;
`
export const FormLink  = styled.a`
    font-family: var(--secondFont), sans-serif;
    color: var(--lettersColor);
    opacity: 0.5;

    &:hover {
        color: var(--contrastColor);
        text-decoration: underline;
        cursor: pointer;
    }
`
export const FormButton  = styled.button`
    width: 300%;
    height: 55px;
    margin-top: 70px;
    border-radius: 70px;

    background-color: var(--contrastColor);
    border: none;

    font-family: var(--destaqueFont);
    font-size: 2rem;
    cursor: pointer;

    transition: .3s ease-in-out;

    &:hover {
        text-shadow: 0px 0px 5px #fff;
    }

    //tela notbook
    @media (max-width: 1625px) {
        width: 250%;
        height: 45px;
        margin-top: 50px;

        font-size: 1.5rem;
    }

    //tela tablet
    @media (max-width: 1100px) {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`