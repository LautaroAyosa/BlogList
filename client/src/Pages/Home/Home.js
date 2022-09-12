import React, { useState, useEffect } from "react";

// Services
import blogService from '../../services/blogs'

import BlogsList from "../../components/Blogs/BlogsList/BlogsList";
import Filter from '../../components/Filter/Filter'

const Home = () => {
    const [ blogs, setBlogs ] = useState([])
    const [ filter, setFilter ] = useState('');

    function handleFilterChange(event) {
        setFilter(event.target.value);
    }

    useEffect(() => {
        blogService.getAll().then((blogs) => setBlogs(blogs))
    }, [])

    return (
        <div>
            <div>
                <Filter
                    label={"Search Blogs"}
                    filter={filter}
                    handleFilterChange={handleFilterChange}
                />
            </div>
            <div>
                <BlogsList blogs={blogs} filter={filter}/>
            </div>
        </div>
        )
}

export default Home