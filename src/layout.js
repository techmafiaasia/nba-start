import React from 'react'

export default function Layout(props) {
    return (
        <div>
            header
            {props.children}
            footer
        </div>
    )
}
