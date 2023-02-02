import React, { useState } from 'react'
import { 
    Wrapper,
    Container,
    CloseButton,
    Form,
    FormTitle,
    ButtonContainer,
    }from './styles'
    import { Button } from '../Button'

const NewTaskPopUp = ({popupOpen, setPopupOpen}) => {
    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
  return (<>
  {popupOpen && (
    <Wrapper>
        <Container>
            <CloseButton onClick={() => setPopupOpen(false)}>
                <span class="material-symbols-outlined">
                    close
                </span>
            </CloseButton>
            <Form>
                <FormTitle>ADD Task</FormTitle>
                <label htmlFor='title'>
                    Title
                    <input type="text"></input>
                </label>
                <label htmlFor='title'>
                    Description
                    <input type="text" id='description'></input>
                </label>
                <ButtonContainer>
                    <Button variant="primary" title="ADD" />
                    <Button variant="secundary" title="Cancel" onClick={() => setPopupOpen(true)}/>
                </ButtonContainer>
            </Form>
        </Container>
    </Wrapper>
    )}
    </>
  )
}

export { NewTaskPopUp }
