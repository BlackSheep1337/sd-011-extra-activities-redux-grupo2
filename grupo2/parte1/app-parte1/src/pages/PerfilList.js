import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { WrapperPerfis } from './styles';
import Perfil from './Perfil';

function PerfilList() {
  const [perfis, setPerfis] = useState([]);
  const [limit, setLimit] = useState(5);
  const url = 'https://api.github.com/users';

  const fetchPerfil = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setPerfis(data);
      console.log('test');
    } catch (error) {
      console.log('ERR', error);
    }
  }
  useEffect(() => {
    fetchPerfil();
  }, [])

  return (
    <WrapperPerfis>
      {perfis.slice(0, limit ? limit : perfis.length).map(perfil => (
        <Perfil key={ perfil.id } { ...perfil } />
      ))}
    </WrapperPerfis>
  )
}

export default PerfilList

