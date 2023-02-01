import styled, {css} from "styled-components";


export const ButtonContainer = styled.button`
    color: #fff;
    padding: 8px;
    background-color: #646ff0;
    border: none;
    border-radius: 3px;
    align-items: center;
    width: 200px;
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

// .button {
// 	display: inline-block;
// 	height: auto;
// 	padding: 0.8rem 2rem;
// 	border: none;
// 	border-radius: 6px;
// 	font-weight: 500;
// 	font-size: 1.6rem;
// 	text-decoration: none;
// 	text-transform: capitalize;
// 	cursor: pointer;
// 	overflow: hidden;
// 	&__select {
// 		color: var(--black-2);
// 		font-family: Poppins;
// 		padding: 1rem;
// 		border: none;
// 		background-color: var(--bg-3);

// 		width: 150px;
// 		cursor: pointer;
// 	}
// }
// .button--primary {
// 	background-color: var(--primaryPurple);
// 	color: var(--white);
// }
// .button--secondary {
// 	background-color: var(--bg-3);
// 	color: var(--black-1);
// }