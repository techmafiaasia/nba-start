import React, { Component } from 'react'
import axios from 'axios'
import {URL} from '../../../../config'
import ArticleHeader from './articleHeader'
import ArticleBody from './articleBody'
export default class Post extends Component {
    
    state = {
        article: [],
        team: []
    }
    componentDidMount(){
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        .then(response =>{
            let article = response.data[0]
            axios.get(`${URL}/teams?id=${article.id}`)
            .then(response =>{
                this.setState({
                    article,
                    team:response.data
                })
            })
        })
    }
    render() {
        console.log('state',this.state.articles)
        const article = this.state.article
        const team = this.state.team
        return (
            <div className = "article-wrapper">
                <ArticleHeader
                    teamData = {team[0]}
                    date = {article.date}
                    author= {article.author}
                />
                <ArticleBody />
            </div>
        )
    }
}
