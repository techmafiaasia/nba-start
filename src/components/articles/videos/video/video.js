import React, { Component } from 'react'
import axios from 'axios'
import {URL} from '../../../../config'
import VideoHeader from './videoHeader'
export default class Video extends Component {
    state = {
        article: [],
        team: []
    }

    componentDidMount(){
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then(response =>{
            console.log('response', response.data)
            let article = response.data[0]
            axios.get(`${URL}/teams?id=${article.team}`)
            .then(response =>{
                this.setState({
                    article,
                    team:response.data
                })
            })
        })
    }
    render() {
        console.log('video', this.state)
        return (
            <div>
                <VideoHeader
                    teamData = {this.state.team[0]}
                    date = {this.state.article.date}
                    author = {this.state.article.author}
                />
                video article
            </div>
        )
    }
}
