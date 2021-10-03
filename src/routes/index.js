import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Contacts from '../pages/Contacts'
import ContactInfo from '../pages/ContactInfo'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Contacts}/>
        <Route exact path="/contacts" component={Contacts}/>
        <Route exact path="/contacts/:shortName"component={ContactInfo}/>
      </Switch>
    </Router>
  )
}

export default Routes
