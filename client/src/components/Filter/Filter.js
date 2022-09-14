import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Filter = (props) => {
    const filter = useSelector( state => state.filter)
    const dispatch = useDispatch()

    const handleFilterChange = (e) => {
        dispatch({
            type: 'filter',
            payload: e.target.value
        })
    }

    return (
        <div>Search Blogs <input onChange={handleFilterChange} value={filter} name='filter' /></div>
    )
}

export default Filter;