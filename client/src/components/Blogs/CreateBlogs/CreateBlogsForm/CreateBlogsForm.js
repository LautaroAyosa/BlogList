import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../../../../redux/reducers/blogsReducer'
import blogsService from '../../../../services/blogs'

const CreateBlogsForm = (props) => {
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewBlog({ ...newBlog, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await blogsService.setToken(JSON.parse(window.localStorage.getItem('loggedUser')).token)
      const addedBlog = await blogsService.createBlog(newBlog)
      dispatch(createBlog(addedBlog))
      setNewBlog({ title: '', author: '', url: '' })

    } catch (err) {
      props.setMessage(`Error! ${err.response.data.error}`)
    }
  }

  return (
        <form>
            <input placeholder="Title" onChange={handleInputChange} value={newBlog.title} name='title' />
            <input placeholder="Author" onChange={handleInputChange} value={newBlog.author} name='author' />
            <input placeholder="URL" onChange={handleInputChange} value={newBlog.url} name='url'/>
            <button onClick={handleSubmit}>Create new blog</button>
        </form>
  )
}

export default CreateBlogsForm
