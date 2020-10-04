import React, { Component } from 'react';
import PokeCard from "./PokeCard";
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <PokeCard />
    </div>
    );
  }
}

export default App;
