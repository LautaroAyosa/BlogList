import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeBlog, updateBlog } from '../../../../redux/reducers/blogsReducer'
import blogService from '../../../../services/blogs'

const Blog = (props) => {
  const dispatch = useDispatch()

  const handleLikeButton = async (e) => {
    e.preventDefault()
    // await blogService.setToken(JSON.parse(window.localStorage.getItem('loggedUser')).token)
    // await blogService.update(props.blog.id, { likes: props.blog.likes + 1 })
    // setLikes(likes + 1)
    dispatch(updateBlog(props.blog.id, {likes: props.blog.likes + 1}))
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    if (window.confirm(`Are you sure you want to remove "${props.blog.title}" by ${props.blog.author}?`)) {
      await blogService.setToken(JSON.parse(window.localStorage.getItem('loggedUser')).token)
      dispatch(removeBlog(props.blog))
    }
  }

  const isFromThisUser = () => {
    if (props.blog.user && window.localStorage.getItem('loggedUser')) {
      const loggedUserName = JSON.parse(window.localStorage.getItem('loggedUser')).username
      const blogUserName = props.blog.user.username
      if (blogUserName === loggedUserName) {
        return true
      }
    }

    return false
  }

  return (
    <div className="singleBlog">
      <div className='singleBlogContent'>
        <div>
          <p className='category'>{props.blog.category}</p>
          <h4 className="title">{props.blog.title}</h4>
          <p className="author">by {props.blog.author}</p>
        </div>
        <div>
          <p className='description'>{props.blog.description}</p>
        </div>
        <div className='singleBlogFooter'>
          <p className="likes">{props.blog.likes} Likes</p>
          <div>
            { isFromThisUser() ? 
              <div>
                <button className='secondaryButton removeBlogButton' onClick={handleDelete}><i className="fa-solid fa-trash"></i>Delete</button>
                <NavLink className='secondaryButton' to={`/dashboard/edit-blog/${props.blog.id}`}><i className="fa-solid fa-trash"></i>Edit</NavLink>
              </div>
              : ''
            }
            <button onClick={handleLikeButton} className='likeBlogButton'><i className="fa-regular fa-thumbs-up"></i>Like</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
