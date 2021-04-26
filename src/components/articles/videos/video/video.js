import React, { Component } from 'react'
import axios from 'axios'
import {URL} from '../../../../config'
import VideoHeader from './videoHeader'
import VideosRelated from '../../../widgets/videosList/videosRelated/videosRelated'
export default class Video extends Component {
    state = {
        article: [],
        team: [],
        teams: [],
        related: []
    }

    componentDidMount(){
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then(response =>{
            console.log('response', response.data)
            let article = response.data[0]
            console.log('article', article)
            axios.get(`${URL}/teams?id=${article.team}`)
            .then(response =>{
                this.setState({
                    article,
                    team:response.data
                })
                console.log('team', this.state.team)
                this.getRelated()
            })
        })
    }

    getRelated = () =>{
        console.log('state', this.state)
        axios.get(`${URL}/teams`)
        .then(response =>{
            let teams = response.data
            console.log(this.state.team[0].city, 'team')
            axios.get(`${URL}/videos?q=Portland&_limit=3`)
            .then(response =>{
                console.log('search response', response.data)
                this.setState({
                    related: response.data
                })
            })
        })
       
    }
    render() {
        //console.log('video', this.state)
        console.log(this.state.related)
        return (
            <div>
                <VideoHeader
                    teamData = {this.state.team[0]}
                    date = {this.state.article.date}
                    author = {this.state.article.author}
                />
                 <div className = "video-wrapper">
                <h1>{this.state.article.title}</h1>
                <iframe
                    title = "videoPlayer"
                    width = "100%"
                    height = "300px"
                    src = {`https://www.youtube.com/embed/${this.state.article.url}`}
                >

                </iframe>
            </div>
            <VideosRelated
                data = {this.state.related}
                teams = {this.state.teams}
            />
            </div>
        )
    }
}
