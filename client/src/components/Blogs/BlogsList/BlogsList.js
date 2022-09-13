import { useEffect } from 'react';

// Services
import blogService from '../../../services/blogs'

import { useDispatch, useSelector } from 'react-redux'
import createBlog from '../../../redux/actions/blogActions'
import Blog from "./Blog/Blog";

const BlogsList = (props) => {
    const state = useSelector(state => state.blogs)
    const dispatch = useDispatch()

    useEffect(() => {
        blogService
            .getAll()
            .then((blogs) => {
                console.log(blogs)
                dispatch(createBlog(blogs))
            })
    }, [dispatch])

    // const filteredData = props.blogs.filter((e) => {
    //     if (props.filter === '') {
    //         return e
    //     } else {
    //         var lowerCase = props.filter.toLowerCase()
    //         return e.title.toLowerCase().includes(lowerCase)
    //     }
    // })
    console.log(state)

    return (
        <div>
            {state.map((blog, i) => {
                return <Blog key={i} blog={blog} />
            })}
            {/* {filteredData
                .sort((a, b) => b.likes - a.likes)
                .map((blog, i) => (
                    <Blog 
                        key={i} 
                        blog={blog} 
                    />
                ))
            } */}
        </div>
    )
}

export default BlogsList