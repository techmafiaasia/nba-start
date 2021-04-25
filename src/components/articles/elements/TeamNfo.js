import React from 'react'

export default function TeamNfo(props) {
    return (
        <div className = "article-team-header">
            <div className = "left"
            style = {{
                backgroundImage: `url('/images/teams/${props.team.logo}')`
            }}
            >

            </div>
            <div className = "right">
                <div>
                    <span>{props.team.city} {props.team.name}</span>
                </div>
                <div>
                    <strong>
                        W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
                    </strong>
                </div>
            </div>
        </div>
    )
}
