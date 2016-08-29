import React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import DemoAlert from './components/DemoAlert/DemoAlert'

const routes = (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/DemoAlert' component={DemoAlert} />
    // Put other routes here
    <Route path='*' component={Home} />
  </Route>
)

export default routes
