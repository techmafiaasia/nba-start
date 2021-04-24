import React from 'react'
import {Link} from 'react-router-dom'

export default function Button(props) {
    let template = null
    switch(props.type){
        case('loadmore'):
            template = <div 
                            className = "blue-btn"
                            onClick = {props.loadmore}
                        >
                            {props.cta}
                       </div>  
        break
        default:
        template = ''
    }
    return (
        <div>
           {template}
        </div>
    )
}
