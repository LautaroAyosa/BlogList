import React from "react";

import BlogsList from "../../components/Blogs/BlogsList/BlogsList";
import Filter from '../../components/Filter/Filter'
import Notification from "../../components/Notification/Notification";

const Home = () => {

    return (
        <div>
            <div>
                <Notification />
            </div>
            <div>
                <Filter />
            </div>
            <div>
                <BlogsList/>
            </div>
        </div>
        )
}

export default Home