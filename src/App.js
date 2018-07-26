import React, { Component } from 'react';

import Grid from './components/Grid';
import Input from './components/Input';

import './App.css';

class App extends Component {
  state = {
    size: 0,
    boxes: []
  };

  changeSize = event => {
    const newSize = parseInt(event.target.value);
    this.setState({ size: newSize, boxes: this.generateGrid(newSize) });
  };

  generateGrid = size => {
    let num = 0;
    let arr = [];
    for (let i = 0; i < size * size; i++) {
      arr.push(i);
    }
    arr = this.shuffle(arr);
    const chunkedArr = [arr.slice(0, size)];
    for (let i = 1; i < size; i++) {
      chunkedArr.push(arr.slice(i * size, size + i * size));
    }

    return chunkedArr;
  };

  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    const {
      state: { size, boxes },
      changeSize
    } = this;

    console.log({ boxes });

    return (
      <div className="app">
        <Input size={size} changeSize={changeSize} />
        <Grid boxes={boxes} />
      </div>
    );
  }
}

export default App;
