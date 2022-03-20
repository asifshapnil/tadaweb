import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 
import { Navbar } from './shared-components/Nav/Navbar';
import { render } from 'react-dom';
import './App.scss';
import { Home } from './Components/Home/Home';
import { AddExpense } from './Components/Add-expense/AddExpense';
import { ExpenseList } from './Components/Expense-list/ExpenseList';
import { EditExpense } from './Components/Edit-expense copy/EditExpense';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/add-expense' element={<AddExpense />} />
        <Route path='/edit-expense/:id' element={<EditExpense />} />
        <Route path='/expense-list' element={<ExpenseList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
