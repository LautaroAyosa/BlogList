import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeBlog } from '../../../../redux/reducers/blogsReducer'
import blogService from '../../../../services/blogs'

const Blog = (props) => {
  const [visible, setVisible] = useState(false)
  const [likes, setLikes] = useState(props.blog.likes)
  const dispatch = useDispatch()

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const handleLikeButton = async (e) => {
    e.preventDefault()
    await blogService.setToken(JSON.parse(window.localStorage.getItem('loggedUser')).token)
    await blogService.update(props.blog.id, { likes: props.blog.likes + 1 })
    setLikes(likes + 1)
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
      <div className='singleBlogImage'>
        <a href={props.blog.url}>
        <img></img>
        </a>
      </div>
      <div className='singleBlogContent'>
        <div>
          <p className='category'>Category</p>
          <h3 className="title">{props.blog.title}</h3>
          <p className="author">by {props.blog.author}</p>
        </div>
        <div>
          <p className='description'></p>
        </div>
        <div className='singleBlogFooter'>
          <p className="likes">{likes} likes</p>
          <div>
            { isFromThisUser() ? 
              <button className='secondaryButton removeBlogButton' onClick={handleDelete}><i class="fa-solid fa-trash"></i>Delete</button>
              : ''
            }
            <button onClick={handleLikeButton} className='likeBlogButton'><i class="fa-regular fa-thumbs-up"></i>Like</button>
          </div>
        </div>
      </div>
      {visible && (
      <div className='singleBlogContent'>
        <p className="singleBlogItem url">URL: {props.blog.url}</p>
        
        { isFromThisUser()
          ? <p className="singleBlogItem remove">
              <button onClick={handleDelete}>Remove</button>
            </p>
          : ''
        }

      </div>
      )}
    </div>
  )
}

export default Blog
