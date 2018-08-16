import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ''
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }
  

  render() {
  
  
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
