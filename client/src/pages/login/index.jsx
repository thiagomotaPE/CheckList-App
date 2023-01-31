import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { } from './styles'

const Login = () => {
  const navigate = useNavigate();
  return (<>
    <div>teste login</div>
    <Link to= "/cadastre"> Fazer um novo Cadastro</Link>
    <Link to= "/checkList"> ir para o ChekList</Link>
    </>
  )
}

export { Login }
