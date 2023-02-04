import React from 'react'
import { Link } from 'react-router-dom';

import { 
  Container, 
  Content, 
  Title, 
  Form, 
  LinkContainer, 
  Button,  
} from './styles'
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
                  <input type="text" />
              </label>

              <label htmlFor='Password'>
                  Password
                  <input type="text" />
              </label>

              <Link to= "/checkList">
                  <Button type='submit'>Login</Button>
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
