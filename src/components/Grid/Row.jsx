import React, { Component } from 'react';

import GridItem from './GridItem';

class Row extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="row">
        {data.map((item, i) => <GridItem key={i} item={item} />)}
      </div>
    );
  }
}

export default Row;
