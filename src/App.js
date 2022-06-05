import React from 'react';
import { Route, Routes } from 'react-router-dom';

import "./App.css";
import Home from './pages/home';
import Input from "./pages/input";
import Login from './pages/login';
import SignUp from './pages/sign';
import Update from './pages/Update';



function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/input" element={<Input/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/update" element={<Update/>}/>
    </Routes> 
  );
}


export default App;

