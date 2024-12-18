import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

import loginService from '../../services/login'

const NavBarLinks = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)
        }
    }, [])

    return (
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            {user ? 
                <li className="dropdown userMenu">
                    <NavLink to='/dashboard/'>Hi, {user.username}</NavLink>
                    <ul>
                        <li><NavLink to='/dashboard/'>Dashboard</NavLink></li>
                        <li><p className="clickable" onClick={async() => await loginService.logout()}>Log out</p></li>
                    </ul>
                </li>
                : <li><NavLink to='/login'>Login</NavLink></li>
            }
        </ul>
    )
}

export default NavBarLinks