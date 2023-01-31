import React from 'react'
import { Link } from 'react-router-dom';

import { } from './styles'
import { Header } from '../../components/Header'

const CheckList = () => {
  return (<>
    <Header />
    <Link to= "/login"> Sair da conta</Link>
    </>
  )
}

export { CheckList }
