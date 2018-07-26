import React, { Component } from 'react';

const Input = props => (
  <input
    type="number"
    placeholder="enter puzzle dimension"
    onChange={props.changeSize}
    value={props.size}
  />
);

export default Input;
