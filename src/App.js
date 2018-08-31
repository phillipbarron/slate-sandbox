import React, { Component } from 'react';
import './App.css';
import FilteredEditor from './FilteredEditor.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <FilteredEditor />
      </div>
    );
  }
}

export default App;
