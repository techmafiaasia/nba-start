import React from 'react'
import FontAwesome, { FontAwesomeIcon } from  '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'

export default function CardInfo(props) {
    const teamName = (teams, team) =>{
        let data = teams.find((item) =>{
            return item.id === team
        })
        if(data){
            return data.name
        }
    } 
    return (
        <div className = "cardInfo">
            <span className = "team-name">
               {teamName(props.teams, props.team)}
            </span>
            <span className = "date">
                <FontAwesomeIcon icon ={faClock}  /> {props.date}
            </span>
        </div>
    )
}
