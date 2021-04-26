import React from 'react'
import VideosListTemplate from '../videosListTemplate'
export default function VideosRelated(props) {
    return (
        <div>
            <VideosListTemplate type = "card" items = {props.data} teams = {props.teams} />
            videos related
        </div>
    )
}
