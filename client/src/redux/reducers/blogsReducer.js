import blogService from '../../services/blogs'
import { createNotification } from './notificationReducer'

const blogsReducer = (state = [], action) => {
    switch (action.type) {
        case '@blogs/init':
            return action.payload
        case '@blogs/new_blog':
            return [...state, action.payload]
        case '@blogs/update_blog':
            const updatedBlog = action.payload.blog
            return state.map(blog => (blog.id !== action.payload.id ? blog : updatedBlog))
        case '@blogs/add_like':
            console.log(action.payload)
            return state.map(blog => (blog.id !== action.payload.id ? blog.likes: action.payload.likes))
        case '@blogs/remove_blog':
            return state.filter((blog) => blog.id !== action.payload)
        default:
            return state
    }
}

export const initBlogs = () => {
    return async (dispatch) => {
        const blogs = await blogService.getAll()        
        dispatch({
            type: '@blogs/init',
            payload: blogs
        })
    }
}

export const createBlog = (blog) => {
    return async (dispatch) => {
        try {
            await blogService.setToken(JSON.parse(window.localStorage.getItem('loggedUser')).token)
            const addedBlog = await blogService.createBlog(blog)
            dispatch( {
                type: '@blogs/new_blog',
                payload: addedBlog
            })
            dispatch(createNotification(
                `New blog "${addedBlog.title}" by ${addedBlog.author} added successfuly!`,
                'success'
            ))
        } catch (error) {
            dispatch(createNotification(error.response.data.error, 'error'))
        }
    } 
}

export const updateBlog = (id, blogToUpdate) => {
    return async (dispatch) => {
        try {
            await blogService.setToken(JSON.parse(window.localStorage.getItem('loggedUser')).token)
            const updatedBlog = await blogService.update(id, blogToUpdate)
            console.log(updateBlog)
            dispatch({
                type: '@blogs/update_blog',
                payload: {id: id, blog: updatedBlog}
            })
            dispatch(createNotification(`${updatedBlog.title} updated successfuly`, 'success'))
        } catch (error) {
            dispatch(createNotification(error.response.data.error, 'error'))
        }
    }
}

export const removeBlog = (blog) => {
    return async (dispatch) => {
        try {
            await blogService.remove(blog.id)
            dispatch ({
                type: '@blogs/remove_blog',
                payload: blog.id
            })
            dispatch(createNotification(
                `${blog.title} by ${blog.author} removed successfuly!`,
               'success'
            ))
        } catch (error) {
            dispatch(createNotification(error.response.data.error, 'error'))
        }
    }
}

export default blogsReducer