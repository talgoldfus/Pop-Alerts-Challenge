import React,{ Component } from 'react';
import { connect } from 'react-redux'
import Alert from '../components/Alert'

class AlertRows extends Component {

    render(){
      const alerts = this.props.alerts.map((alert)=>{
        return <Alert name={alert.name} key={alert.name} id={alert.id}/>
      })

    return (
      <div className="alertsTable">
            {alerts}
      </div>
    )
  }
}

const getAlerts = (alerts, filter) => {
  switch (filter) {
    case 'SHOW_POPULAR_ALERTS':
      return alerts.filter(a => a.popularAlerts)
    case 'SHOW_YOUR_ALERTS':
      return alerts.filter(a => a.yourAlerts)

    default:
        return alerts.filter(a => a.yourAlerts)
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    alerts: getAlerts(state.alerts, state.filter)
  }
}


const AlertRowsContainer = connect(mapStateToProps, null)(AlertRows)

export default AlertRowsContainer
