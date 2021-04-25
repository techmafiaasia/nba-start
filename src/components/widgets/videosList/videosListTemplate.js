import React from 'react'
import {Link} from 'react-router-dom'
import CardInfo from '../cardInfo/cardInfo'

export default function VideosListTemplate(props) {

   const renderVideos = (type) =>{
        let template = ''
        switch(type){
            case 'card':
                template = props.items.map((item, i) =>{
                    return(
                        <Link to = {`/videos/${item.id}`} key = {i}>
                            <div className = "videoListItem-container">
                                <div 
                                className = "left"
                                style = {{
                                    backgroundImage: `url(images/videos/${item.image})`
                                }}
                                >
                                    <div >sth</div>
                                </div>
                                <div className = "right">
                                    <CardInfo team = {item.team} teams = {props.teams} date = {item.date} />
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                        </Link>             
                    )       
                })
            break
            default:
                template = ''
        }
        return template
    }


    return (
        <div>
            {renderVideos(props.type)}
        </div>
    )
}
