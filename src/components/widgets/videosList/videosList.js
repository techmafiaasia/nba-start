import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {URL} from '../../../config'
import Button from '../buttons/button'
import CardInfo from '../cardInfo/cardInfo'
import VideosListTemplate from './videosListTemplate'
export default class VideosList extends Component {
    state = {
        items: [],
        teams: [],
        start : this.props.start,
        amount: this.props.amount,
        end: this.props.start + this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }
    
    request = (start, end) =>{
        if(this.state.teams.length <1){
            axios.get(`${URL}/teams`)
            .then(response =>{
                this.setState({
                    teams: response.data
                })
            })
        }
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then(response =>{
            this.setState({
                items: [...this.state.items, ...response.data]
            })
        })
    }
    renderTitle = () =>{
        return this.props.title? 
        <h3>NBA videos</h3>
        : null
    }
    loadMore = () =>{
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
                template = this.state.items.map((item, i) =>{
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
                                    <CardInfo team = {item.team} teams = {this.state.teams} date = {item.date} />
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

        console.log('RENDER')
      
        return (
            <div className = "videos-list-wrapper">
                {this.renderTitle()}
                <VideosListTemplate type = "card" items = {this.state.items} teams = {this.state.teams} />
                {/* {this.renderVideos(this.props.type)} */}
                {this.renderButton()}
            </div>
        )
    }
}
