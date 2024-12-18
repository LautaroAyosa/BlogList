import React from "react";

import BlogsList from "../../components/Blogs/BlogsList/BlogsList";
import Filter from '../../components/Filter/Filter'

const Home = () => {

    return (
        <div className="mainContainer">
            <div className="banner">
                <h1>The Blog List</h1>
                <p>A dynamic blog directory where users can discover, share, and explore blogs across various categories. Easily filter through curated content to find blogs that match your interests and needs.</p>
            </div>
            <div className='baseContainer'>
                <Filter />
                <BlogsList/>
            </div>
        </div>
        )
}

export default Home