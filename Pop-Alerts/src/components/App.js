import React ,{ Component } from 'react'
import NavBar from './NavBar'
import SearchBar from '../containers/SearchBarContainer'
import AlertsTable from './AlertsTable'

import '../index.css'

class App extends Component{

  render(){
    return (
      <div className="container">
          <div className="main">
              <NavBar />
              {this.props.children}
              <SearchBar />
              <AlertsTable />
          </div>
      </div>

      )
  }
  }

export default App
