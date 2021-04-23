import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
export default function SideNavItems() {

    const items = [
        {
            className: 'option',
            icon: faHome,
            text: 'Home',
            link: '/'
        },
        {
            className: 'option',
            icon: faHome,
            text: 'News',
            link: '/news'
        },
        {
            className: 'option',
            icon: faHome,
            text: 'Videos',
            link: '/video'
        },
        {
            className: 'option',
            icon: faHome,
            text: 'Sign In',
            link: '/signin'
        },
        {
            className: 'option',
            icon: faHome,
            text: 'Sign Out',
            link: '/signout'
        }
    ]
    const showItems = () =>{
        return items.map((item, i) =>{
            return(
               
                <div key = {i} className = {item.className}>
                    <Link to = {item.link}>
                        <FontAwesomeIcon icon = {item.icon} />
                        {item.text}
                    </Link> 
                </div> 
               
            )
        })
    }
    return (
       <div>
           {showItems()}
       </div>
    )
}

<div className = "option">
<FontAwesomeIcon icon = {faHome} />
sidenav items
</div>
