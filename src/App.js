import React from 'react';
import { Route, Routes } from 'react-router-dom';

import "./App.css";
import Home from './pages/home';
import Input from "./pages/input";
import Login from './pages/login';
import SignUp from './pages/sign';




function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/input" element={<Input/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
    </Routes> 
  );
}


export default App;

