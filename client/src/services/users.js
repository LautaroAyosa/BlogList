import axios from 'axios'
const baseUrl = '/api/users'

const getUser = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const postUser = async (user) => {
  const response = await axios.post(baseUrl, user)
  return response.data
}

// eslint-disable-next-line
export default { getUser, postUser }