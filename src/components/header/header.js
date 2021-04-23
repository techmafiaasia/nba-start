import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
export default function Header() {
    const logo = () =>{
        return(
            <div className = "logo-box">
                <Link to = "/">
                    <img src = "/images/nba_logo.png"  className = "logo"/>
                </Link>
            </div>
        )
    }
    const navbars = () =>{
        return(
            <FontAwesomeIcon icon = {faBars} className = "text-white text-left" />
        )
    }
    return (
        <header className = "header">
            <div className = "container">
                <div className = "row">
                    <div className = "col">
                       {logo()}
                    </div>
                    <div className = "col d-flex justify-content-end align-items-center">
                        {navbars()}
                    </div>
                </div>
            </div>
        </header>
    )
}
