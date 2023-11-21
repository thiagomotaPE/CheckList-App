import { InputContainer } from "./styles"

interface InputProps {
    title: string,
    type: string,
    variant?: 'login' | 'singin',
    className: string;
}

export function Input({type, title, variant, className }: InputProps){
    return(
        <>
        <InputContainer className={className}>
            <input type={type}/>
            <label htmlFor={type} className={variant}>{title}</label>
        </InputContainer>
        </>
    )
}