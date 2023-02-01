import React from 'react'

import { ButtonContainer } from './styles';

const Button = ({title,variant = "primary"}) => {
  return (
    <ButtonContainer variant={variant}>{title}</ButtonContainer>
  )
}

export { Button }