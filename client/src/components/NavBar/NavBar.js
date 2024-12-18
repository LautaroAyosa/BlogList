import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

import NavBarLinks from "./NavBarLinks";
import Togglable from "../Togglable/Togglable";

const NavBar = () => {
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav>
            <NavLink to="/" className="logo">
                <img src="/static/images/logo_rectangular_S-fondo_negro.png" alt="Website Logo"/>
            </NavLink>
            { isMobile ? 
                <Togglable 
                className="hello"
                showDivClassName="showDivClass"
                buttonLabel={<i className="fa-solid fa-bars"></i>}
                contentDivClassName="sidebarMenu"
                hideLabel={<i className="fa-solid fa-xmark"></i>}
                >
                    <NavBarLinks/>
                </ Togglable>
                : 
                <NavBarLinks/>
            }
        </nav>
    )
}

export default NavBar