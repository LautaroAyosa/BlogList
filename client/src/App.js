import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { initBlogs } from './redux/reducers/blogsReducer'

// Services
import blogService from './services/blogs'

import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home'
import RegisterLogIn from './Pages/RegisterLogIn/RegisterLogIn'
import Dashboard from './Pages/Dashboard/Dashboard';

import './App.css'


const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    blogService
        .getAll()
        .then((blogs) => dispatch(initBlogs(blogs)))
  },[dispatch])

  return (
    <Router>
      <NavBar/>
      <div className=''>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/login' element={<RegisterLogIn />}/>
          <Route exact path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </div>
    </Router>
  )
}


export default App
