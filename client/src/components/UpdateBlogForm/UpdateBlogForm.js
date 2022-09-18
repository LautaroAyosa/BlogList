import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { updateBlog } from "../../redux/reducers/blogsReducer"

const UpdateBlogForm = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const blogs = useSelector(state => state.blogs)
    const blogToUpdate = blogs.find( (blog) => blog.id === params.id )

    const [newBlog, setNewBlog] = useState({ 
        title: '', 
        author: '', 
        url: '', 
        description: '', 
        category: '' 
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setNewBlog({ ...newBlog, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(updateBlog(params.id, newBlog))
        setNewBlog({ title: '', author: '', url: '', description:'', category:'' })
    }

    return (
            <form>
                <input className='col1-2' placeholder={blogToUpdate.title} onChange={handleInputChange} value={newBlog.title} name='title' />
                <input className='col1-2' placeholder={blogToUpdate.author} onChange={handleInputChange} value={newBlog.author} name='author' />
                <input placeholder={blogToUpdate.url} onChange={handleInputChange} value={newBlog.url} name='url'/>
                <textarea placeholder={blogToUpdate.description} onChange={handleInputChange} value={newBlog.description} name='description'/>
                <select placeholder='Select a category' name='category'>
                    <option value='software'>Software</option>
                </select>
                <button className='primaryButton' onClick={handleSubmit}>Update new blog</button>
            </form>
    )
}

export default UpdateBlogForm