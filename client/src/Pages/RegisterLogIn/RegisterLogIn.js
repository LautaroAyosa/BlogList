import React from "react"
import Login from "../../components/Login/Login"

const RegisterLogIn = () => {
    const user = JSON.parse(window.localStorage.getItem('loggedUser'))

    if (user === null) {
        return (
        <div>
            <Login />
        </div>
        )
    }
}

export default RegisterLogIn