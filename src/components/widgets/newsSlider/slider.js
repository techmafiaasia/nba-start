import React, { Component } from 'react'
import axios from 'axios'
import {URL} from '../../../config'
import SliderTemplate from './sliderTemplate'
export default class Slider extends Component {
    state = {
        news: []
    }
    componentWillMount(){
        axios.get(`${URL}/articles?_start=2&_end=5`)
        .then(response =>{
            this.setState({
                news: response.data
            })
        })
    }
    render() {
        console.log('state', this.state.news)
        return (
            <div>
               <SliderTemplate type = "featured" data = {this.state.news} />
            </div>
        )
    }
}
