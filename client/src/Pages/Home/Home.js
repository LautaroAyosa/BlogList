import React from "react";

import BlogsList from "../../components/Blogs/BlogsList/BlogsList";
import Filter from '../../components/Filter/Filter'

const Home = () => {

    return (
        <div>
            <div className="banner">
                <h1>The Blog List</h1>
                <p>This is a blog description placeholder</p>
            </div>
            <div className='baseContainer'>
                <Filter />
                <BlogsList/>
            </div>
        </div>
        )
}

export default Home