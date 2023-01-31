import styled from "styled-components";

export const Container = styled.header`
    background-color:  #dedfe1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
`
export const Logo = styled.h1`
    color: #646681;
    font-size: 2em;
    font-family: 'Poppins', sans-serif;
`
export const NewTask = styled.button`
    color: #fff;
    padding: 8px;
    background-color: #646ff0;
    border: none;
    border-radius: 3px;
    align-items: center;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;

    :hover{
        background-color:  #6470f0a6;
    }
`