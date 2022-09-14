import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { initBlogs } from './redux/reducers/blogsReducer'

import Notification from './components/Notification/Notification';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home'
import RegisterLogIn from './Pages/RegisterLogIn/RegisterLogIn'
import Dashboard from './Pages/Dashboard/Dashboard';

import './sass/main.css'


const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initBlogs())
  },[dispatch])

  return (
    <Router>
      <header>
        <Notification />
      </header>
      <NavBar/>
      <div className=''>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/login' element={<RegisterLogIn />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </div>
    </Router>
  )
}


export default App
