import React, { Component } from 'react';
import Todos from './Todos';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
