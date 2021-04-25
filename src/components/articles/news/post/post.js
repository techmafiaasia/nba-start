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
        console.log('state',this.state.article)
        console.log('teams', this.state.team)
        const article = this.state.article
        const team = this.state.team
        return (
            <div className = "article-wrapper">
                <ArticleHeader
                    teamData = {team[0]}
                    date = {article.date}
                    author= {article.author}
                />
                <div className = "article-body" >
                    <h1>{article.title}</h1>
                    <div
                        className = "article-image"
                        style = {{
                            backgroundImage: `url('/images/articles/${article.image}')`
                        }}
                    ></div>
                    <div className = "article-text"> 
                        {article.body}
                    </div>

                </div>
            </div>
        )
    }
}
