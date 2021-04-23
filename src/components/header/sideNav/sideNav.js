import React from 'react'
import SideNav from 'react-simple-sidenav'
import SideNavItems from './sideNavItems'
export default function SideNavigation(props) {
    return (
        <div>
            <SideNav
                showNav = {props.showNav}
                onHideNav = {props.onHideNav}
                navStyle = {{
                    background: '#242424',
                    
                }}
            >
                <SideNavItems />
            </SideNav>
        </div>
    )
}
