import React, { Component } from 'react'
import axios from 'axios'
import {URL} from '../../../config'
import SliderTemplate from './sliderTemplate'
export default class Slider extends Component {
    state = {
        news: []
    }
    componentWillMount(){
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.start + this.props.amount}`)
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
               <SliderTemplate type = {this.props.type} data = {this.state.news} settings = {this.props.settings} />
            </div>
        )
    }
}
