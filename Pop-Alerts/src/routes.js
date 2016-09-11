import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import Menu from './components/Menu'
import Test from './components/Test'


export default (
<div>
    <Route path="/" component={App} />
    <Route path="/terms" component={Test} />
    <Route path="/policy" component={Test} />
    <Route path="/settings" component={Test} />
    <Route path="/logout" component={Test} />
</div>
)
