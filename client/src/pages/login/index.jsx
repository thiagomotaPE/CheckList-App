import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { 
  Container, 
  Content, 
  Title, 
  Form, 
  LinkContainer, 
  Button,  
} from './styles'
import { Footer } from '../../components/Footer'
import { Axios } from 'axios';

const Login = () => {

  const navigate = useNavigate();

  const [loginCompare, setLoginCompare] = useState('')
  const [passwordCompare, setPasswordCompare] = useState('')

    //enviar informações pro back e depois trazer de volta pro front
  const compareAccount = () => {
      Axios.post("http://localhost:3001/api/comparetAccount", {
        loginCompare:loginCompare, 
        passwordCompare:passwordCompare,
      }).then((response) => {
        if(response.status === 200){
          navigate("/checkList")
        }else{
          console.log("Usuario não cadastrado");
        }
      })
  }


  return (<>
    <Container>

      <Title>CheckList</Title>

      <Content>

        <Title>Login</Title>

          <Form>

              <label htmlFor='E-mail'>
                  E-mail
                  <input type="email" onChange={(e) => {
                        setLoginCompare(e.target.value)
                    }}/>
              </label>

              <label htmlFor='Password'>
                  Password
                  <input type="password" min={8} onChange={(e) => {
                        setPasswordCompare(e.target.value)
                    }}/>
              </label>

              <Button type='submit' onClick={compareAccount}>Login</Button>
              
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
