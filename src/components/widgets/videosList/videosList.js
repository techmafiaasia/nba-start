import React, { Component } from 'react'
import axios from 'axios'
import {URL} from '../../../config'
import Button from '../buttons/button'
export default class VideosList extends Component {
    state = {
        teams: [],
        videos: [],
        start : this.props.start,
        amount: this.props.amount,
        end: this.props.start + this.props.amount
    }

    componentDidMount(){

    }
    
    request = (start, end) =>{
        axios.get(`${URL}/teams?_start=${start}&_end=${end}`)
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

    }
    renderButton = () =>{
        return this.props.loadmore? 
        <Button 
            type = "loadmore"
            loadMore = {() => this.loadMore()}
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
                        <div>
                        items
                        </div>
                    )
                   
                })
            break
            default:
                template = ''
        }
        return template
    }
    render() {
        console.log(this.state.teams)
        return (
            <div className = "videos-list-wrapper">
                {this.renderTitle()}
                {this.renderVideos(this.props.type)}
                {this.renderButton()}
            </div>
        )
    }
}
