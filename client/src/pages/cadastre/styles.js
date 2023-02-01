import styled from 'styled-components'

export const Container = styled.div`
    
`
export const Content = styled.div`
	background-color:  #ecedf6;
	max-width: 500px;
	width: 90%;
	margin:0 auto;
	display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	border-radius: 8px;
    box-shadow: 5px 5px 5px #00000020;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
	
`

export const Title = styled.h1`
	text-align: center;
    font-size: 2.5rem;
	margin-top: 5px;
	margin-bottom: 2rem;
	text-transform: capitalize; 
    color:  #646ff0;
`
export const Form = styled.form`
	width: 100%;
	label {
		font-size: 1.3rem;
		color: #646681;
		input{
			margin-top: 0.5rem;
			margin-bottom: 2rem;
			width: 100%;
			padding: 1rem;
			border: none;
			background-color: #fff;
			font-size: 1rem;
            box-shadow: 5px 5px 5px #00000020;
		}
	}
`

export const LinkContainer = styled.div`
    margin-top: 10px;
    a{
        color: #646681;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`