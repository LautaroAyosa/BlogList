import blogService from '../../services/blogs'
import { createNotification } from './notificationReducer'

const blogsReducer = (state = [], action) => {
    switch (action.type) {
        case '@blogs/init':
            return action.payload
        case '@blogs/new_blog':
            return [...state, action.payload]
        case '@blogs/update_blog':
            const updatedBlog = action.payload
            return updatedBlog
        case '@blogs/remove_blog':
            const id = action.payload
            return state.filter((blog) => blog.id !== id)
        default:
            return state
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

export const initBlogs = () => {
    return async (dispatch) => {
        const blogs = await blogService.getAll()        
        dispatch({
            type: '@blogs/init',
            payload: blogs
        })
    }
}

export const updateBlog = id => {
    return {

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