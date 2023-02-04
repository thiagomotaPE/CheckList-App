import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Container, Content, Title, Form, LinkContainer, Button } from './styles'
import { Footer } from '../../components/Footer';
import Axios from 'axios'

const Cadastre = () => {

  const navigate = useNavigate();

  const [email_login, setEmail_login] = useState('')
  const [secret_password, setSecret_password] = useState('')

    //enviar informações pro back e depois trazer de volta pro front
  const submitNewUsers = () => {
      Axios.post("http://localhost:3001/api/insertUser", {
        email_login:email_login, 
        secret_password:secret_password,
      }).then((response) => {
        if(response.status === 200){
          navigate("/")
        }else{
          console.log("cadastro não realizado");
        }
        
      })
  }

    return (<>
      <Container>

        <Title>CheckList</Title>

        <Content>

          <Title>Cadastre</Title>

            <Form>

                <label htmlFor='E-mail'>
                    E-mail
                    <input type="email" onChange={(e) => {
                        setEmail_login(e.target.value)
                    }}/>
                </label>

                <label htmlFor='Password'>
                    Password
                    <input type="password" min={8} onChange={(e) => {
                        setSecret_password(e.target.value)
                    }}/>
                </label>

                <Button title="Cadastrar" onClick={submitNewUsers}>Cadastrar</Button>

            </Form>

          <LinkContainer>

            <Link to= "/"> Voltar para o login</Link>

          </LinkContainer>

          <Footer />

        </Content>
      </Container>
      </>
    )
}

export { Cadastre }