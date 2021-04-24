import React, { Component } from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {URL} from '../../../config'
import Button from './../buttons/button'
import CardInfo from '../cardInfo/cardInfo'
export default class NewsList extends Component {
    state = {
        items: [],
        teams: [],
        start : this.props.start,
        amount : this.props.amount,
        end : this.props.start + this.props.amount
    }
    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }
    
    request = (start, end) =>{
        if(this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
            .then(response =>{
                this.setState({
                    teams:response.data
                })
            })
        }
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then(response =>{
            this.setState({
                items: [...this.state.items, ...response.data]
            })
        })
    }

    loadMore = () =>{
        let end = this.state.end + this.state.amount
        this.request(this.state.end, end)
    }

    renderNews = (type) =>{
        let template = ''
        switch(type){
            case 'card':
                template = this.state.items.map((item,i) =>{
                    return(
                        <CSSTransition
                        key = {i}
                        classNames = {{
                            enter: 'newsList-wrapper',
                            enterActive: 'newsList-wrapper_enter'
                        }}
                        timeout = {500} 
                        >
                     <div key = {i} className = "newsList-item">
                         <Link to = {`articles/${item.id}`}>
                             <CardInfo team = {item.team} teams = {this.state.teams} date = {item.date} />
                             <h2>{item.title}</h2>
                         </Link>
                     </div>
                     </CSSTransition>
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
         
                  <div>
                <TransitionGroup
                    component = "div"
                    className = "list"
                >
                    {this.renderNews(this.props.type)}
                    <Button 
                        type = "loadmore"
                        loadmore = {this.loadMore}
                        cta = "Load More News"
                    />
                </TransitionGroup>
               
                </div>
           
        )
    }
}
