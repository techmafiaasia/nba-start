import React from 'react'

export default function PostData(props) {
    return (
        <div class = "article-post-data">
            <div> Date: <span>{props.data.date}</span></div>
            <div> Author: <span>{props.data.author}</span></div>
        </div>
    )
}
