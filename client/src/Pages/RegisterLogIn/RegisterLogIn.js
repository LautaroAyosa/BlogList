import React, { useState } from "react"

import Notification from "../../components/Notification/Notification"
import Login from "../../components/Login/Login"

const RegisterLogIn = () => {
    const [message, setMessage] = useState(null)
    const user = JSON.parse(window.localStorage.getItem('loggedUser'))

    if (user === null) {
        return (
        <div>
            <Notification message={message}/>
            <Login setMessage={setMessage} />
        </div>
        )
    }
}

export default RegisterLogIn