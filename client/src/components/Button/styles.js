import styled, {css} from "styled-components";


export const ButtonContainer = styled.button`
    color: #fff;
    padding: 8px;
    background-color: #646ff0;
    border: none;
    border-radius: 3px;
    align-items: center;
    width: 100px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;

    :hover{
        background-color:  #6470f0a6;
    }
    
    ${({variant}) => variant === "secundary" && css`
        
        
        background: #cccdde;
        color:  #646681;
        &:hover {
            background-color: #dedfe1;
        }
    `}
`