import React from 'react';
import { Link } from 'react-router-dom';
import { PerfilCard } from './styles';

function Perfil({ login, avatar_url  }) {
  return (
    <PerfilCard>
      <img src={ avatar_url } alt={ login } />
      <div>
        <h3>GitHub Character: { login }</h3>
        <Link to={`/users/${ login }`}>
          <span className="btn btn-primary">More Info</span>
        </Link>
      </div>
    </PerfilCard>
  )
}

export default Perfil;
