import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; import { Navbar } from './shared-components/Nav/Navbar';
import './App.scss';
import { Home } from './Components/Home/Home';
import { AddExpense } from './Components/Add-expense/AddExpense';
import { ExpenseList } from './Components/Expense-list/ExpenseList';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/add-expense' element={<AddExpense />} />
        <Route path='/expense-list' element={<ExpenseList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
