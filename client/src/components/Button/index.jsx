import React from 'react'

import { ButtonContainer } from './styles';

const Button = ({onClick, title,variant = "primary"}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>{title}</ButtonContainer>
  )
}

export { Button }