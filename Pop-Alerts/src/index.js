import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router,browserHistory } from 'react-router'
import Routes from './routes'

const initialAlerts = [
  { id:1,
    name:'Jay Z',
    yourAlerts: false ,
    popularAlerts:  true
  },
  {
    id:2,
    name:'Beyonce',
    yourAlerts: false ,
    popularAlerts:  true
  },
  {
    id:3,
    name:'Kanye West',
    yourAlerts: false ,
    popularAlerts:  true
  },
  { id:4,
    name:'Lebron James',
    yourAlerts: false ,
    popularAlerts:  true
  },
  { id:5,
    name:'New York Yankees',
    yourAlerts: false ,
    popularAlerts:  true
  },
  {
    id:6,
    name:'Steve Spugrat',
    yourAlerts: true ,
    popularAlerts:  true
  },
  { id:7,
    name:'Flipboard',
    yourAlerts: true ,
    popularAlerts:  true
  },
  { id:8,
    name:'Syria',
    yourAlerts: true ,
    popularAlerts:  true
  },
  { id:9,
    name:'Barack Obama',
    yourAlerts: false ,
    popularAlerts:  true
  }
]

let store = createStore(reducer, {alerts: initialAlerts},
  window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
 document.getElementById('root')
);
