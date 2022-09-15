import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../../../../redux/reducers/blogsReducer'

const CreateBlogsForm = (props) => {
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewBlog({ ...newBlog, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
      dispatch(createBlog(newBlog))
      setNewBlog({ title: '', author: '', url: '' })
  }

  return (
        <form>
            <input className='col1-2' placeholder="Title" onChange={handleInputChange} value={newBlog.title} name='title' />
            <input className='col1-2' placeholder="Author" onChange={handleInputChange} value={newBlog.author} name='author' />
            <input placeholder="URL" onChange={handleInputChange} value={newBlog.url} name='url'/>
            <button className='primaryButton' onClick={handleSubmit}>Create new blog</button>
        </form>
  )
}

export default CreateBlogsForm
