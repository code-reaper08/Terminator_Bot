import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Resignation from './Pages/Resignation';
import ResetPassword from './Pages/ResetPassword';

import './App.css';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path={"/resetPassword"} element={<ResetPassword/>}/>
        <Route exact path={"/resignation"} element={<Resignation/>}/> 
      </Routes>
    </Router>
    </div>
  );
}
export default App;
