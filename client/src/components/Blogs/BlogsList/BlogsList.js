import { useSelector } from 'react-redux'
import Blog from "./Blog/Blog";

const BlogsList = ({usedFor}) => {
    const blogs = useSelector(state => state.blogs)
    const filter = useSelector(state => state.filter)

    if (usedFor === 'dashboard') {
        const dashboardData = blogs.filter((e) => {
            if(e.user) {
                return e.user.username.includes(JSON.parse(window.localStorage.getItem('loggedUser')).username)
            }
        })
        return (
            <div className='blogsListContainer'>
                {dashboardData.length !== 0 ? 
                dashboardData
                    .sort((a, b) => b.likes - a.likes)
                    .map((blog, i) => (
                        <Blog 
                            key={i} 
                            blog={blog} 
                        />
                    )) :
                    <p>You don't have any blogs.</p>
                }
            </div>
        )
    }


    const filteredData = blogs.filter((e) => {
        if (filter === '') {
            return e
        } else {
            var lowerCase = filter.toLowerCase()
            return e.title.toLowerCase().includes(lowerCase)
        }
    })

    return (
        <div className='blogsListContainer'>
            
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