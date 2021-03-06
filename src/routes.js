import React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import DemoAlert from './components/DemoAlert/DemoAlert'
import About from './components/About/About'

const routes = (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/home' component={Home} />
    <Route path='/DemoAlert' component={DemoAlert} />
    <Route path='/About' component={About} />
    // Put other routes here
    <Route path='*' component={DemoAlert} />
  </Route>
)

export default routes
