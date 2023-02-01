import React from 'react'
import { Container, CheckBox, Description, Actions } from './styles'

const Task = ({title, desc}) => {
  return (
    <Container>
        <CheckBox type="checkbox"></CheckBox>
        <Description>
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

export{ Task }
