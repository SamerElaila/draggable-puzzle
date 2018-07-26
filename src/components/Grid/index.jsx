import React from 'react';

import Row from './Row';

import './index.css';

const Grid = props => (
  <div className="grid-container">
    {props.boxes.map((row, i) => <Row key={i} data={row} />)}
  </div>
);

export default Grid;
