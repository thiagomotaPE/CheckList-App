import React from 'react'
import { Link } from 'react-router-dom';
import { LinkContainer } from './styles'
import { Header } from '../../components/Header'
import { Task } from '../../components/Task'

const CheckList = () => {
  return (<>
    <Header />
    <LinkContainer>
      <Link to= "/login"> Sair da conta</Link>
    </LinkContainer>
    <Task desc="22:07, 31/01/2023" title="tarefa numero 1"/>
    <Task desc="12:30, 2/05/2023" title="tarefa 2"/>
    </>
  )
}

export { CheckList }
