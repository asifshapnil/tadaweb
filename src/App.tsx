import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; import { Navbar } from './shared-components/Nav/Navbar';
import './App.scss';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
