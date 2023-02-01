import styled from "styled-components";

export const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const Container = styled.div`
	background-color:  #ecedf6;
	max-width: 500px;
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	border-radius: 8px;
	position: relative;
`
export const CloseButton = styled.button`
	position: absolute;
	top: -10px;
	right: 0;
	transform: translateY(-100%);
	font-size: 2.5rem;
	padding: 0.5rem;
	border-radius: 4px;
    border: none;
	background-color:  #ecedf6;
	color: var(--black-2);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.3s ease all;
	z-index: -1;
	&:hover {
		background-color: #e32525;
		color: white;
	}
`

export const FormTitle = styled.h1`
	color:  #646681;
	font-size: 1.4rem;
	margin-bottom: 2rem;
	text-transform: capitalize;
`
export const Form = styled.form`
	width: 100%;
	label {
		font-size: 1.6rem;
		color: #646681;
		input{
			margin-top: 0.5rem;
			margin-bottom: 2rem;
			width: 100%;
			padding: 1rem;
			border: none;
			background-color: #fff;
			font-size: 1.6rem;
		}
        #description{
            margin-top: 0.5rem;
			margin-bottom: 2rem;
			padding: 1rem;
            height: 250px;
			border: none;
			background-color: #fff;
			color: #646681;
			font-size: 1.3rem;
        }
	}
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
	gap: 1rem;
    font-family: 'Poppins', sans-serif;
`