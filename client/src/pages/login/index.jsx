import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Container, Content, Title, Form, LinkContainer } from './styles'
import { Button } from '../../components/Button'

const Login = () => {
  const navigate = useNavigate();
  return (<>
    <Container>
      <Content>
        <Title>Login</Title>
          <Form>
              <label htmlFor='E-mail'>
                  E-mail
                  <input type="text"></input>
              </label>
              <label htmlFor='Password'>
                  Password
                  <input type="text"></input>
              </label>
          </Form>
        <Link to= "/checkList"> <Button title="Login" /> </Link>
        <LinkContainer>
          <Link to= "/cadastre"> Fazer um novo Cadastro</Link>
        </LinkContainer>
      </Content>
    </Container>
    </>
  )
}

export { Login }
