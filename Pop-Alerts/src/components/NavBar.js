import React, { Component } from 'react'
import { Link } from 'react-router'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state= {linkRoute:'/menu'}
  }

  handleClick(){
    if(this.state.linkRoute ==='/menu'){
      this.setState({linkRoute:'/'})
    }else{
      this.setState({linkRoute:'/menu'})
    }
  }

  render(){
    return (
      <div className="row navBar">
        <div className="col-xs-offset-2 col-xs-7 col-md-offset-2 col-md-8">
          <h1>POP ALERTS</h1>
        </div>
        <div className="col-xs-3 col-md-2">
          <Link to={this.state.linkRoute} onClick={this.handleClick.bind(this)}>
            <img id="menuIcon" src={require('../assets/images/menu-icon-01.png')} alt="menuIcon"/>
          </Link>
        </div>
        </div>
    )
  }
}

export default NavBar
