import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import NameInput from './oldCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code><Counter /></code> and save to reload.
        </p>
        <NameInput />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
