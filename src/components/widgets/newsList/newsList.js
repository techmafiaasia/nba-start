import React, { Component } from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {URL} from '../../../config'

export default class NewsList extends Component {
    state = {
        items: [],
        start : this.props.start,
        amount : this.props.amount,
        end : this.props.start + this.props.amount
    }
    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }
    
    request = (start, end) =>{
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then(response =>{
            this.setState({
                items: [...this.state.items, ...response.data]
            })
        })
    }

    loadMore = () =>{
        console.log('this function works')
        let end = this.state.end + this.state.amount
        this.request(this.state.end, end)
    }

    renderNews = (type) =>{
        let template = ''
        switch(type){
            case 'card':
                template = this.state.items.map((item,i) =>{
                    return(
                     <div key = {i} className = "newsList-item">
                         <Link to = {`articles/${item.id}`}>
                             <h2>{item.title}</h2>
                         </Link>
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
        console.log( 'cardtemplatenow',this.state.items)
        return (
            <div>
               {this.renderNews(this.props.type)}
                <div onClick = {this.loadMore}>
                    click
                </div>
            </div>
        )
    }
}
