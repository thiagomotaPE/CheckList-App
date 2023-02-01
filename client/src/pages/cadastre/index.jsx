import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Content, Title, Form, LinkContainer } from './styles'
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

const Cadastre = () => {
    return (<>
      <Container>
        <Title>CheckList</Title>
        <Content>
          <Title>Cadastre</Title>
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
          <Link to= "/checkList"> <Button title="Cadastrar" /> </Link>
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