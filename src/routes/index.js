import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Contacts from '../pages/Contacts'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Contacts/></Route>
        <Route exact path="/Contacts"><Contacts/></Route>
      </Switch>
    </Router>
  )
}

export default Routes
