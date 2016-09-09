import React from 'react';
import AlertSelectorContainer from '../containers/AlertSelectorContainer'
import AlertRowsContainer from '../containers/AlertRowsContainer'

const AlertsTable = ()=>{
    return (
      <div className="alertsTable">
          <AlertSelectorContainer />
          <AlertRowsContainer />
      </div>
    )
}


export default AlertsTable
