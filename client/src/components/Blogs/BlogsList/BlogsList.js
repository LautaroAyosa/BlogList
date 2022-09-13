import { useSelector } from 'react-redux'
import Blog from "./Blog/Blog";

const BlogsList = (props) => {
    const blogs = useSelector(state => state.blogs)
    const filter = useSelector(state => state.filter)

    const filteredData = blogs.filter((e) => {
        if (filter === '') {
            return e
        } else {
            var lowerCase = filter.toLowerCase()
            return e.title.toLowerCase().includes(lowerCase)
        }
    })

    return (
        <div>
            {filteredData
                .sort((a, b) => b.likes - a.likes)
                .map((blog, i) => (
                    <Blog 
                        key={i} 
                        blog={blog} 
                    />
                ))
            }
        </div>
    )
}

export default BlogsList