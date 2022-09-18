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
import CreateBlogsForm from './components/CreateBlogsForm/CreateBlogsForm';
import DashboardLayout from './Pages/DashboardLayout/DashboardLayout';
import UpdateBlogForm from './components/UpdateBlogForm/UpdateBlogForm';
import DashboardManageBlogs from './Pages/DashboardLayout/DashboardManageBlogs/DashboardManageBlogs';
import NotFound from './Pages/NotFound/NotFound';


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

          <Routes>
            <Route exact path='/login' element={<LogIn />}/>
            <Route exact path='/signin' element={<SignIn />}/>
            <Route exact path='/' element={<Home />}/>
            <Route path='/dashboard/' element={<DashboardLayout/>}>
              <Route path='manage-blogs' element={<DashboardManageBlogs />} />
              <Route path='add-new-blog' element={<CreateBlogsForm />} />
              <Route path='edit-blog/:id' element={<UpdateBlogForm />} />
            </Route>
            <Route path='*' element={<NotFound />}/>
          </Routes>

      </div>
      
    </Router>
  )
}


export default App
