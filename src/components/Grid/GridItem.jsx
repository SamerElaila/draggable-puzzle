import React, { Component } from 'react';

class GridItem extends Component {
  handleOnDrop = event => {
    console.log('onDrop');
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    event.target.innerHTML = document.getElementById(data).id;
    this.setState({ items: data });
  };

  allowDrop = event => {
    event.preventDefault();
  };

  drag = event => {
    event.dataTransfer.setData('text', event.target.id);
  };

  render() {
    const { item } = this.props;
    return (
      <div
        id={item}
        draggable="true"
        onDrop={this.handleOnDrop}
        onDragOver={this.allowDrop}
        className="grid-item"
        onDragStart={this.drag}
      >
        {item}
      </div>
    );
  }
}

export default GridItem;
