import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LinkContainer } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer';
import { TaskCard } from '../../components/TaskCard'
import { TaskCardPopup } from '../../components/TaskCardPopup';

const CheckList = () => {
  const [taskPopupOpen, setTaskPopupOpen] = useState(false);
  return (<>
    <Header />

    <LinkContainer>
      <Link to= "/login"> Sair da conta</Link>
    </LinkContainer>

    <TaskCard onClick={() => setTaskPopupOpen(true)} desc="22:07, 31/01/2023" title="tarefa numero 1"/>
    <TaskCard onClick={() => setTaskPopupOpen(true)} desc="12:30, 2/05/2023" title="tarefa 2"/>

    <TaskCardPopup taskPopupOpen={taskPopupOpen} setTaskPopupOpen={setTaskPopupOpen} title="Task Title" description="sgsggsgsgsgsgsgsgsgsgsgsssgsg"/>

    <Footer />
    </>
  )
}

export { CheckList }
