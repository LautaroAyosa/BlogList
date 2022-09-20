import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createBlog, updateBlog } from '../../redux/reducers/blogsReducer'
import categoriesServices from '../../services/categories'
import blogServices from '../../services/blogs'

const CreateBlogsForm = () => {
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '', description: '', category:'' })
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()
  const params = useParams()
  const blogs = useSelector(state => state.blogs)
  let blogToUpdate
  let handleSubmit
  
  if (params.id) { //If params.id exists, it means that you are modifying a blog.
    blogToUpdate = blogs.find( (blog) => blog.id === params.id )
    // Handle UpdateBlog Submit
    handleSubmit = async (e) => {
      e.preventDefault()
      dispatch(updateBlog(params.id, newBlog))
    }
  } else {
    // Handle CreateBlog Submit
    handleSubmit = async (e) => {
      e.preventDefault()
        dispatch(createBlog(newBlog))
        setNewBlog({ title: '', author: '', url: '', description:'', category:'' })
    }
  }

  // Get all categories from a db 
  useEffect(() => {
    categoriesServices
      .getAllCategories()
      .then( (response) => {
        setCategories(response)
      })
    
    if (params.id) {
      blogServices
        .getById(params.id)
        .then((response) => {
          setNewBlog({ 
            title: response.title, 
            author: response.author, 
            url: response.url, 
            description: response.description, 
            category: response.category })
        })
    }
  }, [])

  // Hanlde input change
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewBlog({ ...newBlog, [name]: value })
  }

  return (
    <form>
      <input className='col1-2' placeholder={blogToUpdate ? blogToUpdate.title : 'Title' } onChange={handleInputChange} value={newBlog.title} name='title' />
      <input className='col1-2' placeholder={blogToUpdate ? blogToUpdate.author : 'Author' } onChange={handleInputChange} value={newBlog.author} name='author' />
      <input className='col3/4' placeholder={blogToUpdate ? blogToUpdate.url : 'Url' } onChange={handleInputChange} value={newBlog.url} name='url'/>
      <select placeholder='Select a category' name='Category' onChange={handleInputChange}>
        <option value=''>Select a Category</option>
        {categories.map((category, i) => {
          return <option key={i} value={category.name}>{category.name}</option>  
        })}
      </select>
      <textarea placeholder={blogToUpdate ? blogToUpdate.description : 'Description' } onChange={handleInputChange} value={newBlog.description} name='description'/>
      <button className='primaryButton' onClick={handleSubmit}>{ blogToUpdate ? 'Update Blog' : 'Create new blog'}</button>
    </form>
  )
}

export default CreateBlogsForm
