import React from 'react'
import TeamNfo from '../../elements/TeamNfo'
import PostData from '../../elements/PostData'
export default function ArticleHeader(props) {

    const teamInfo = (team) =>{
        return team ?
          <TeamNfo team = {team}/>
        : null
    }
    const postData = (date, author) =>{
        return(
            <PostData data = {{date, author}} />
        )
       
    }
    return (
        <div>
            {teamInfo(props.teamData)}
            {postData(props.date, props.author)}
        </div>
    )
}
