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

export const createBlog = content => {
    return {
        type: '@blogs/new_blog',
        payload: content
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
            dispatch(createNotification({
                message: `${blog.title} by ${blog.author} removed successfuly!`,
                type: 'success'
            }))
        } catch (error) {
            dispatch(createNotification({
                message: error.response.data.error,
                type: 'error'
            }))
        }
    }
}

export default blogsReducer