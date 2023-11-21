import { 
    Container, AccountContainer, Image, Slogan, 
    FormContainer, FormTitle, OtherOptions, FormLink, 
    FormButton, LoginLine
} from "./styles"
import { Input } from "../../components/Input"
import { Link } from 'react-router-dom';

export function Login(){
    return(
        <>
        <Container>
            <Image>
                <Slogan>Planeje, Execute, Marque a Caixa!</Slogan>
            </Image>
            <AccountContainer>
                <FormContainer>
                    <FormTitle>Login</FormTitle>
                    <LoginLine />
                    <Input className="login" type="e-mail" title="E-MAIL"/>
                    <Input className="login"  type="password" title="Senha"/>
                    <OtherOptions>
                        <Link to= "/singIn"><FormLink>Criar conta</FormLink></Link>
                        <Link to= "/singIn"><FormLink>Esqueci minha senha</FormLink></Link>
                    </OtherOptions>
                    <Link to= "/checklist">
                        <FormButton>Entrar</FormButton>
                    </Link>
                </FormContainer>
            </AccountContainer>
        </Container>
        </>
    )
}