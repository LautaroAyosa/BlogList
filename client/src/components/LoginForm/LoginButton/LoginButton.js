import loginService from "../../../services/login"
import blogService from '../../../services/blogs'
import {createNotification} from '../../../redux/reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const LoginButton = (props) => {
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await loginService.login({
                username: props.user.username,
                password: props.user.password
            })
            window.localStorage.setItem('loggedUser', JSON.stringify(user))
            blogService.setToken(user.token)
            window.location.reload()
        } catch(err) {
            dispatch(createNotification(err.response.data.error, 'error'))
        }
    }

    return (
        <button 
            type="submit"
            className='primaryButton'
            onClick={handleSubmit}>
            Submit
        </button>
    )
}

export default LoginButton