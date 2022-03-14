import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './shared-components/nav/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
    </Router>

  );
}

export default App;
