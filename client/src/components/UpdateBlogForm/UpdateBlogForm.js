import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import { updateBlog } from "../../redux/reducers/blogsReducer"

const UpdateBlogForm = (props) => {
    const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '', description: '', category:'' })
    const dispatch = useDispatch()
    const params = useParams()

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
                <input className='col1-2' placeholder="Title" onChange={handleInputChange} value={newBlog.title} name='title' />
                <input className='col1-2' placeholder="Author" onChange={handleInputChange} value={newBlog.author} name='author' />
                <input placeholder="Url" onChange={handleInputChange} value={newBlog.url} name='url'/>
                <textarea placeholder="Description" onChange={handleInputChange} value={newBlog.description} name='description'/>
                <select placeholder='Select a category' name='category'>
                    <option value='software'>Software</option>
                </select>
                <button className='primaryButton' onClick={handleSubmit}>Update new blog</button>
            </form>
    )
}

export default UpdateBlogForm