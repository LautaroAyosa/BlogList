import axios from 'axios'
const baseUrl = '/api/categories'

const getAllCategories = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getOneCategory = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const createCategory = async newCategory => {
    const response = await axios.post(baseUrl, newCategory)
    return response.data
  }
  
  const updateCategory = async (id, modifiedCategory) => {
    const response = await axios.put(`${baseUrl}/${id}`, modifiedCategory)
    return response.data
  }
  
  const removeCategory = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
  }

// eslint-disable-next-line
export default { getAllCategories, getOneCategory, createCategory, updateCategory, removeCategory }