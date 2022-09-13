import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home'
import RegisterLogIn from './Pages/RegisterLogIn/RegisterLogIn'

import './App.css'


const App = () => {

  return (
    <Router>
      <NavBar/>
      <div className=''>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/login' element={<RegisterLogIn />}/>
        </Routes>
      </div>
    </Router>
  )
}


export default App
