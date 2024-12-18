import React from "react"
import { Navigate, NavLink } from "react-router-dom"
import LoginForm from "../../components/LoginForm/LoginForm.js"

const LogIn = () => {
    const user = JSON.parse(window.localStorage.getItem('loggedUser'))

    if (user === null) {
        return (
        <div className="loginContainer">
            <aside>
                <h1>Log In</h1>
                <p>You don't have an account yet? <NavLink to='/signin' className={"secondaryLink"}>Create an account</NavLink></p>
                <LoginForm />
            </aside>
        </div>
        )
    }

    return <Navigate to="/dashboard" />
}

export default LogIn