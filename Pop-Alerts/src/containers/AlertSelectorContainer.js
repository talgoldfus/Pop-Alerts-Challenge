import React,{ Component }from 'react';
import { connect } from 'react-redux'
import changeFilterAction from '../actions/changeFilterAction'


class AlertSelector extends Component {
  constructor(props){
    super(props)
    this.handleClick.bind(this)
  }

  handleClick(event,filter){
    event.preventDefault()
    this.props.changeFilter(filter)
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4 alertsSelector">
          <a href="#" className="btn" onClick={event=>this.handleClick(event,"SHOW_POPULAR_ALERTS")}>Popular Alerts</a>
          <a href="#" className="btn" onClick={event=>this.handleClick(event,"SHOW_YOUR_ALERTS")}>Your Alerts</a>
        </div>
      </div>
    )
  }
}



const AlertSelectorContainer = connect(null,{changeFilter: changeFilterAction})(AlertSelector)

export default AlertSelectorContainer
