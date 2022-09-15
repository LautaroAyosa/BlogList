import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

import loginService from '../../services/login'

const NavBar = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)
        }
    }, [])

    return (
        <nav>
            <div>Logo</div>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                {user ? 
                    <li className="dropdown userMenu">
                        <NavLink to='/dashboard/'>Hi, {user.name}</NavLink>
                        <ul>
                            <li><NavLink to='/dashboard/'>Manage my blogs</NavLink></li>
                            <li><NavLink to='/dashboard/add-new-blog'>Add new Blog</NavLink></li>
                            <li><p className="clickable" onClick={async() => await loginService.logout()}>Log out</p></li>
                        </ul>
                    </li>
                    : <li><a href='/login/'>Log In</a></li>
                }
            </ul>
        </nav>
    )
}

export default NavBar