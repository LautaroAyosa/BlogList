import React from "react";
import Banner from "../../components/Banner/Banner";

import BlogsList from "../../components/Blogs/BlogsList/BlogsList";
import Filter from '../../components/Filter/Filter'

const Home = () => {

    return (
        <div className='baseContainer'>
            {/* <Banner title='Welcome to "The Blog List"'>
                <p>Have you ever found yourself searching for a new blog post to read? SAY NO MORE! The Blog List is the solution to that unbelievably common issue.</p>
            </Banner> */}
            <Filter />
            <BlogsList/>
        </div>
        )
}

export default Home