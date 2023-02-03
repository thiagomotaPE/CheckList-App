import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {Container, Content, Title, Form, LinkContainer, Button } from './styles'
import { Footer } from '../../components/Footer';
import Axios from 'axios'

const Cadastre = () => {

  const [email_login, setEmail_login] = useState('')
  const [secret_password, setSecret_password] = useState('')

    //enviar informações pro back e depois trazer de volta pro front
  const submitUsers = () => {
      Axios.post("http://localhost:3001/api/insert", {
        email_login:email_login, 
        secret_password:secret_password,
      }).then((response) => {
        console.log(response)
      })
  }

    {/* tela de cadastro de novos usuarios */}
    return (<>
      <Container>

        <Title>CheckList</Title>

        <Content>

          <Title>Cadastre</Title>

            <Form>

                <label htmlFor='E-mail'>
                    E-mail
                    <input type="text" onChange={(e) => {
                        setEmail_login(e.target.value)
                    }}/>
                </label>

                <label htmlFor='Password'>
                    Password
                    <input type="text" onChange={(e) => {
                        setSecret_password(e.target.value)
                    }}/>
                </label>

                <Link to= "/checkList">
                  <Button title="Cadastrar" onClick={submitUsers}>Cadastrar</Button>
                </Link>

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