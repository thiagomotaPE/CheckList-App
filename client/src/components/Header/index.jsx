import React from 'react'

import { Container, Logo, NewTask } from './styles'

const Header = () => {
  return (
    <Container>
        <Logo>Check List</Logo>
        <NewTask>New Task</NewTask>
        <NewTaskPopUp></NewTaskPopUp>
    </Container>
  )
}

export { Header }
