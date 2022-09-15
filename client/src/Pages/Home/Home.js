import React from "react";

import BlogsList from "../../components/Blogs/BlogsList/BlogsList";
import Filter from '../../components/Filter/Filter'
import Notification from "../../components/Notification/Notification";

const Home = () => {

    return (
        <section className="homeContainer">
            <Filter />
            <BlogsList/>
        </section>
        )
}

export default Home