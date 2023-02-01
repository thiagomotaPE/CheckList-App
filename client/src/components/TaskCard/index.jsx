import React from 'react'
import { Container, CheckBox, Description, Actions } from './styles'

const TaskCard = ({title, desc, onClick}) => {
  return (
    <Container>
        <CheckBox type="checkbox"></CheckBox>
        <Description onClick={onClick}>
            <h3 >{title}</h3>
            <p>{desc}</p>
        </Description>
        <div>
            <Actions>
                <span class="material-symbols-outlined">
                    delete
                </span>
            </Actions>
            <Actions>
                <span class="material-symbols-outlined">
                    edit
                </span>
            </Actions>
        </div>
    </Container>
  )
}

export{ TaskCard }
