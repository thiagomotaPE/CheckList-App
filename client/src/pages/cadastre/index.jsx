import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { } from './styles'

const Cadastre = () => {
    const navigate = useNavigate();
    return (<>
      <div>teste Cadastro</div>
      <Link to= "/login">Voltar para o login</Link>
      <Link to= "/checkList"> ir para as CheckList</Link>
      </>
    )
}

export { Cadastre }