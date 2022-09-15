import React from "react";

import BlogsList from "../../components/Blogs/BlogsList/BlogsList";
import Filter from '../../components/Filter/Filter'
import Notification from "../../components/Notification/Notification";

const Home = () => {

    return (
        <section className="homeContainer">
            <div className="banner">
                <h1>Welcome to "The Blog List"</h1>
                <p>Have you ever found yourself searching for a new blog post to read? SAY NO MORE! The Blog List is the solution to that unbelievably common issue.</p>
            </div>
            <Filter />
            <BlogsList/>
        </section>
        )
}

export default Home