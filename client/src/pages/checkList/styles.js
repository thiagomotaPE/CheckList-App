import styled from "styled-components";

export const LinkContainer = styled.div`
	margin-bottom: 10px;
    text-align: center;
    a{
        color: #646681;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`
export const Container = styled.div`
	background-color:  #ecedf6;
	max-width: 500px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	border-radius: 8px;
	position: relative;
`

export const FormTitle = styled.h1`
	color:  #646681;
	font-size: 1.4rem;
	text-transform: capitalize;
`
export const Form = styled.form`
	width: 100%;
	label {
		font-size: 1.1rem;
		color: #646681;
		input{
			margin-top: 0.5rem;
			margin-bottom: 1rem;
			width: 100%;
			padding: 1rem;
			border: none;
			background-color: #fff;
			font-size: 1rem;
		}
        #description{
            margin-top: 0.5rem;
			margin-bottom: 2rem;
			width: 100%;
			padding: 1rem;
            height: 100px;
			border: none;
			background-color: #fff;
			font-size: 1.6rem;
        }
	}
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
    font-family: 'Poppins', sans-serif;
`

export const TaskContainer = styled.div`
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
        &:hover{
            color: #646ff0;
        }
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