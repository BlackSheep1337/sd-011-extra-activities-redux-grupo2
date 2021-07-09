import React, { useState } from 'react';
import { WrapperForm, FormControl } from './styles';
import { useDispatch } from 'react-redux';
import { getNAME } from '../redux/actions';

function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
    dispatch(getNAME(name));
  }

  return (
    <WrapperForm>
      <FormControl>
        <h2>GitHub Characters</h2>
        <input
          placeholder="Digit your character name"
          value={ name }
          type="text"
          onChange={ handleChange }
        />
      </FormControl>
    </WrapperForm>
  )
}

export default Form;
