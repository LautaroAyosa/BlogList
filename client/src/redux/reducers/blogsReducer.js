const blogsReducer = (state = [], action) => {
    switch (action.type) {
        case '@blogs/init':
            return action.payload
        case '@blogs/new_blog':
            return [...state, action.payload]
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

export const initBlogs = blogs => {
    return {
        type: '@blogs/init',
        payload: blogs
    }
}

export default blogsReducer