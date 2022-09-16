import userService from '../../../services/users'
import {createNotification} from '../../../redux/reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const SignInButton = (props) => {
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const newUser = await userService.postUser({
            email: props.user.email,
            username: props.user.username,
            password: props.user.password,
        })
        window.localStorage.setItem('loggedUser', JSON.stringify(newUser))
        dispatch(createNotification(`Successfuly created a new user`, 'success'))
        props.setUser({email: '', username: '', name: '', lastName: '', password: ''})
        
        } catch (error) {
        dispatch(createNotification(error.response.data.error, 'error'))
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

export default SignInButton