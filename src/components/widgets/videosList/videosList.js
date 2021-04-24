import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {URL} from '../../../config'
import Button from '../buttons/button'
import CardInfo from '../cardInfo/cardInfo'

export default class VideosList extends Component {
    state = {
        teams: [],
        videos: [],
        start : this.props.start,
        amount: this.props.amount,
        end: this.props.start + this.props.amount
    }

    componentDidMount(){
        this.request(this.state.start, this.state.end)
    }
    
    request = (start, end) =>{
        if(this.state.teams.length <1){
            axios.get(`${URL}/teams?_start=${start}&_end=${end}`)
            .then(response =>{
                this.setState({
                    teams: response.data
                })
            })
        }
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then(response =>{
            this.setState({
                teams: [...this.state.teams, ...response.data]
            })
        })
    }
    renderTitle = () =>{
        return this.props.title? 
        <h3>NBA videos</h3>
        : null
    }
    loadMore = () =>{
        console.log('loaadmore clicked ')
        let end = this.state.end + this.state.amount
        this.request(this.state.end, end)
    }
    renderButton = () =>{
        return this.props.loadMore? 
        <Button 
        type = "loadmore"
        loadmore = {this.loadMore}
        cta = "load more videos"
        />
        :
        <Button type = "linkTo" cta = "Load More Videos" linkTo = "/videos" />
    }
    renderVideos = (type) =>{
        let template = ''
        switch(type){
            case 'card':
                template = this.state.teams.map((item, i) =>{
                    return(
                        <Link to = {`/videos/${item.id}`} key = {i}>
                            <div className = "videoListItem-container">
                                <div 
                                className = "left"
                                style = {{
                                    backgroundImage: `url(images/videos/${item.image})`
                                }}
                                >
                                    <div ></div>
                                </div>
                                <div className = "right">
                                    {/* <CardInfo teams = {item.team} date = {item.date} /> */}
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
    render() {
      
        return (
            <div className = "videos-list-wrapper">
                {this.renderTitle()}
                {this.renderVideos(this.props.type)}
                {this.renderButton()}
            </div>
        )
    }
}
