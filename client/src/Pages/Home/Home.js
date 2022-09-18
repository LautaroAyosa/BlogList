import React from "react";

import BlogsList from "../../components/Blogs/BlogsList/BlogsList";
import Filter from '../../components/Filter/Filter'

const Home = () => {

    return (
        <div className='baseContainer'>
            <Filter />
            <BlogsList/>
        </div>
        )
}

export default Home