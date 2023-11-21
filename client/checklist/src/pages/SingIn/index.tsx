import { 
    Container, AccountContainer, Image, Slogan, 
    FormContainer, FormTitle, OtherOptions, FormLink, 
    FormButton, RegisterLine
} from "./styles"
import { Input } from "../../components/Input"
import { Link } from 'react-router-dom';

export function SingIn(){
    return(
        <>
        <Container>
            <AccountContainer>
                    <FormContainer>
                        <FormTitle>Cadastro</FormTitle>
                        <RegisterLine />
                        <Input className="singin" type="e-mail" title="E-MAIL"/>
                        <Input className="singin"  type="password" title="Senha"/>
                        <OtherOptions>
                            <Link to="/"><FormLink>Acessar minha conta</FormLink></Link>
                        </OtherOptions>
                        <Link to="/checklist">
                            <FormButton>Cadastrar</FormButton>
                        </Link>
                    </FormContainer>
                </AccountContainer>
            <Image>
                <Slogan>Simplifique com Checklist, Faca acontecer!</Slogan>
            </Image>
        </Container>
        </>
    )
}