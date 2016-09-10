import React,{ Component } from 'react';
import AlertEditInputContainer from '../containers/AlertEditInputContainer'

class Alert extends Component {
    constructor(props){
      super(props)
      this.state= {edit: false}
      this.handleClick.bind(this)
    }

    handleClick() {
      this.setState({ edit: true })
    }

    render(){
      if (!this.state.edit){ alert=
        (<div className="row alert">
          <div className="col-md-11 text">
            <p>{this.props.name}</p>
          </div>
          <div className="col-md-1">
            <button onClick={()=>this.handleClick()} className="btn edit">EDIT</button>
          </div>
      </div>)}
      else{
        alert= (< AlertEditInputContainer value={this.props.name} id={this.props.id} />)
      }
      debugger
    return (
        alert
      )
  }
}


export default Alert
