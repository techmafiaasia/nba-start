import React from 'react'
import TeamNfo from '../../elements/TeamNfo'
export default function VideoHeader(props) {
    const teamNfo = (team) =>{
        return team ? 
        <TeamNfo team = {team} />
        : null
    }
    return (
        <div>
            {teamNfo(props.teamData)}
          
        </div>
    )
}
