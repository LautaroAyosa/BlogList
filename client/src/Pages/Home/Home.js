import React, { useState } from "react";

import BlogsList from "../../components/Blogs/BlogsList/BlogsList";
import Filter from '../../components/Filter/Filter'

const Home = () => {
    const [ filter, setFilter ] = useState('');

    function handleFilterChange(event) {
        setFilter(event.target.value);
    }



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
                <BlogsList filter={filter}/>
            </div>
        </div>
        )
}

export default Home