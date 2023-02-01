import React from 'react'
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
  return (<>
    <Wrapper>
        <Container>
            <CloseButton>
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
                    <Button variant="secundary" title="Cancel" />
                </ButtonContainer>
            </Form>
        </Container>
    </Wrapper>
    </>
  )
}

export { NewTaskPopUp }
