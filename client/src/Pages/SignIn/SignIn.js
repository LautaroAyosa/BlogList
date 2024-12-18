import React from "react"
import { NavLink, Navigate } from "react-router-dom"
import SignInForm from "../../components/SignInForm/SignInForm"

const LogIn = () => {
    const user = JSON.parse(window.localStorage.getItem('loggedUser'))

    if (user === null) {
        return (
        <div className="loginContainer">
            <aside>
                <h1>Sign In</h1>
                <p>Create a free account or <NavLink to='/login' className={"secondaryLink"}>log in</NavLink></p>
                <SignInForm />
            </aside>
        </div>
        )
    }

    return <Navigate to="/dashboard" />
}

export default LogIn