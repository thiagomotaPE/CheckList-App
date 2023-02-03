import React from 'react'
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { 
  Container, 
  Content, 
  Title, 
  Form, 
  LinkContainer, 
  Button, 
  ErrorText 
} from './styles'
import { Footer } from '../../components/Footer'


const schema = yup.object({
  email: yup.string().email("Email invalido!").required("Campo obrigatorio!"),
  password: yup.string().min(5, "Senha invalida! crie uma senha com pelo menos 5 caracteres").required("Campo obrigatorio!"),
}).required();

const Login = () => {
  const { handleSubmit, control, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  console.log(isValid, errors)
  const onSubmit = values => console.log(values);
  return (<>
    <Container>
      <Title>CheckList</Title>
      <Content>
        <Title>Login</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='E-mail'>
                  E-mail
                  <Controller 
                    name="Email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <input name='email' type="text" {...field} />}
                  />
              </label>
              <label htmlFor='Password'>
                  Password
                  <Controller 
                    name="Password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <input name='password' type="text" {...field} />}
                  />
              </label>
              <Link to= "/checkList">
                  <Button type='submit' title="Login">Login</Button>
              </Link>
              
          </Form>
          
        
        <LinkContainer>
          <Link to= "/cadastre"> Fazer um novo Cadastro</Link>
        </LinkContainer>
        <Footer />
      </Content>
    </Container>
    </>
  )
}

export { Login }
