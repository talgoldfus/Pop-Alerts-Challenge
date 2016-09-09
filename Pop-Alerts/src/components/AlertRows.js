import React,{ Component } from 'react';
import Alert from './Alert'
class AlertRows extends Component {


    render(){
      const alerts = this.props.alerts.map((alert)=>{
        return <Alert artist={alert} key={alert} />
      })

    return (
      <div>
        <table className="alertsTable">
          <tbody>
            {alerts}
          </tbody>
        </table>
      </div>
    )
  }
}


export default AlertRows
