import axios from 'axios';
import Loading from '../components/Loading';
import React, { useState, useEffect } from 'react';
import { WrapperPerfis } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import Perfil from './Perfil';
import { getPERFIS, toggleLoad } from '../redux/actions';

function PerfilList() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.PerfisReducer)
  const { perfis, loading, name } = state;
  const [limit, setLimit] = useState(5);
  const url = 'https://api.github.com/users';


  const fetchPerfil = async () => {
    dispatch(toggleLoad(true));
    try {
      const { data } = await axios.get(url);
      dispatch(getPERFIS(data));
      dispatch(toggleLoad(false));
    } catch (error) {
      console.log('ERR', error);
    }
  }

  useEffect(() => {
    fetchPerfil();
  }, []);

  if (loading) {
    return <Loading />
  }
  return (
    <WrapperPerfis>
      { perfis.slice(0, limit ? limit : perfis.length).map(perfil => (
        <Perfil key={ perfil.id } { ...perfil } />
      ))}
    </WrapperPerfis>
  )
}

export default PerfilList

