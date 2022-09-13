const createBlog = content => {
    return {
        type: 'ADD_NEW',
        payload: content
    }
}

export default { createBlog }