import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Contacts from '../pages/Contacts'
import ContactDetails from '../pages/ContactDetails'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Contacts}/>
        <Route exact path="/contacts" component={Contacts}/>
        <Route exact path="/contacts/:shortName"component={ContactDetails}/>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
