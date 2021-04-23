import React from 'react'
import {Link} from 'react-router-dom'
import {CURRENT_YEAR} from '../../config'
export default function Footer() {
    return (
        <div className = "footer">
            <div className = "container">
                <div className = "row">
                    <div className = "col">
                    <Link to = "/" className = "footer-logo">
                         <img src = "/images/nba_logo.png" />
                    </Link>
                    </div>
                    <div className = "col">
                        <p className = "copyright">
                            @NBA {CURRENT_YEAR} , all rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
