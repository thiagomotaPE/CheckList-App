import React, { useState } from 'react'
import {NewTaskPopUp} from '../NewTaskPopUp'
import { Button } from '../Button'

import { Container, Logo } from './styles'

const Header = () => {

  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <Container>
        <Logo>Check List</Logo>
        <Button variant="primary" onClick={() => setPopupOpen(true)} title="ADD Task" />
        <NewTaskPopUp popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
    </Container>
  )
}

export { Header }
