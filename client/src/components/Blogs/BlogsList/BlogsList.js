import Blog from "./Blog/Blog";

const BlogsList = (props) => {

    const filteredData = props.blogs.filter((e) => {
        if (props.filter === '') {
            return e
        } else {
            var lowerCase = props.filter.toLowerCase()
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