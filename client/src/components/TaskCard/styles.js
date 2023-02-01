import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px ;
    padding: 15px;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 5px 5px 5px #00000025;
    border-radius: 5px;
`

export const CheckBox = styled.input`
    width: 30px;
    color: #646681;
    border: none;
    cursor: pointer;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    h3{
        color: #585858;
    }

    p{
        color: #646681;
    }

`

export const Actions = styled.button`
    border: none;
    margin: 5px;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;

    &:hover{
        background-color:  #646ff0;
        color: #fff;
    }
`