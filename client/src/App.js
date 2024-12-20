import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { initBlogs } from './redux/reducers/blogsReducer'

import Notification from './components/Notification/Notification';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home'
import LogIn from './Pages/Login/LogIn';
import SignIn from './Pages/SignIn/SignIn';

import './sass/main.css'
import BlogsForm from './components/BlogsForm/BlogsForm';
import DashboardLayout from './Pages/DashboardLayout/DashboardLayout';
import DashboardManageBlogs from './Pages/DashboardLayout/DashboardManageBlogs/DashboardManageBlogs';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';


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
      <div className='wrapper'>

          <Routes>
            <Route exact path='/login' element={<LogIn />}/>
            <Route exact path='/signin' element={<SignIn />}/>
            <Route exact path='/' element={<Home />}/>
            <Route path='/dashboard/' element={<DashboardLayout/>}>
              <Route path='' exact element={<DashboardManageBlogs />} />
              <Route path='add-new-blog' element={<BlogsForm />} />
              <Route path='edit-blog/:id' element={<BlogsForm />} />
            </Route>
            <Route path='*' element={<NotFound />}/>
          </Routes>

      </div>
      <Footer/>
    </Router>
  )
}


export default App
