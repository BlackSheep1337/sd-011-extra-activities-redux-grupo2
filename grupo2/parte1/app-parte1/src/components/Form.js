import React from 'react';
import { WrapperForm, FormControl } from './styles';

function Form() {
  return (
    <WrapperForm>
      <FormControl>
        <h2>GitHub Characters</h2>
        <input type="text" />
      </FormControl>
    </WrapperForm>
  )
}

export default Form;
