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

const TaskCardPopup = ({taskPopupOpen, setTaskPopupOpen, title, description}) => {
  return (<>
  {taskPopupOpen && (
    <Wrapper>
        <Container>
            <CloseButton onClick={() => setTaskPopupOpen(false)}>
                <span class="material-symbols-outlined">
                    close
                </span>
            </CloseButton>
            <Form>
                <FormTitle>{title}</FormTitle>
                <label htmlFor='title'>
                    Description
                    <div type="text" id='description'>
                        <p>{description}</p>
                    </div>
                </label>
                <ButtonContainer>
                    <Button variant="secundary" title="Close" onClick={() => setTaskPopupOpen(false)}/>
                </ButtonContainer>
            </Form>
        </Container>
    </Wrapper>
    )}
    </>
  )
}

export { TaskCardPopup }
