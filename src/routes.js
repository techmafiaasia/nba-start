import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Layout from './layout'
import Home from './components/home/home'
import NewsArticle from './components/articles/news/post/post'
export default class Routes extends Component{
    render(){
        return(
            <Layout>
                  <Switch>
                        <Route path = "/" exact component = {Home} />
                        <Route path = "/articles/:id" exact component = {NewsArticle} />
                  </Switch>
            </Layout>
          
        )
    }
}
