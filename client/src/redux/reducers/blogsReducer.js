

const blogsReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_BLOG':
            return [...state, action.payload]
        default:
            return state
    }
}

export default blogsReducer