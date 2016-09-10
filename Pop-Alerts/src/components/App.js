import React from 'react';
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import AlertsTable from './AlertsTable'

import '../index.css'

const App = ()=>{
    return (
    <div className="container">
        <div className="main">
            <NavBar />
            <SearchBar />
            <AlertsTable />
        </div>
    </div>

    )
}


export default App
