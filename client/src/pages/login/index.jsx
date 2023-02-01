import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Content, Title, Form, LinkContainer } from './styles'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

const Login = () => {
  return (<>
    <Container>
      <Title>CheckList</Title>
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
        <Footer />
      </Content>
    </Container>
    </>
  )
}

export { Login }
