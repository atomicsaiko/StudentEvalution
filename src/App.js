import React, { Component } from 'react';
import Batch from './components/Batch'
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Batch />
        <Batch />
        <Button label="Create"/>
      </div>
    );
  }
}

export default App;
