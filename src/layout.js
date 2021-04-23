import React, {Component} from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'

export default class Layout extends Component{
    state = {
        showNav: false
    }
    toggleNav = (action) =>{
        this.setState({
            showNav : action
        })
    }
    render(){
        return (
            <div>
                <Header
                    showNav = {this.state.showNav}
                    onHideNav = {() => this.toggleNav(false)}
                    onOpenNav = {() => this.toggleNav(true)}
                />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
