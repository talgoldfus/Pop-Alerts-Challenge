import React from 'react';
import AlertSelectorContainer from '../containers/AlertSelectorContainer'
import AlertRowsContainer from '../containers/AlertRowsContainer'

const AlertsTable = ()=>{
    return (
      <div className="row">
          <div className="col-md-10 col-md-offset-1 mainAlertContainer">
            <AlertSelectorContainer />
            <AlertRowsContainer />
          </div>
      </div>
    )
}


export default AlertsTable
