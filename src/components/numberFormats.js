import React from 'react';
import NumberFormat from 'react-number-format';

function getComponent(props, format) {
  const { inputRef, onChange, ...other } = props;
  const onValueChange = values => {
    onChange({
      target: {
        value: values.value,
      }
    });
  };
  
  return <NumberFormat {...other} ref={inputRef} onValueChange={onValueChange} format={format}/>;
}


export function CardNumber(props) {
  return getComponent(props, '#### #### #### ####');
}

export function CVCNumber(props) {
  return getComponent(props, '###');
}

export function ExpiryNumber(props) {
  return getComponent(props, '##/####');
}