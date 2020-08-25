import React from 'react';

const Input = props => {
  return (
    <input 
      type="number"
      value={props.inputValue}
      onChange={props.onChange}
      placeholder="Enter a Decimal Number"
    />
  );
};

export default Input;