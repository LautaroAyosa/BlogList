import React, {Children, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { initBlogs } from './redux/reducers/blogsReducer'

import Notification from './components/Notification/Notification';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home'
import RegisterLogIn from './Pages/RegisterLogIn/RegisterLogIn'

import './sass/main.css'
import CreateBlogsForm from './components/Blogs/CreateBlogs/CreateBlogsForm/CreateBlogsForm';
import DashboardLayout from './Pages/DashboardLayout/DashboardLayout';
import BlogsList from './components/Blogs/BlogsList/BlogsList';


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
      <div className='mainContainer'>
        <div className='baseContainer'>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/login' element={<RegisterLogIn />}/>
            <Route path='/dashboard/' element={<DashboardLayout/>}>
              <Route path='manage-blogs' element={<BlogsList usedFor="dashboard" />} />
              <Route path='add-new-blog' element={<CreateBlogsForm />} />
            </Route>
          </Routes>
        </div>
      </div>
      
    </Router>
  )
}


export default App
