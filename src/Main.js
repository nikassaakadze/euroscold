import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './ka/App'
import AppEn from './en/AppEn'
import AppRus from './rus/AppRus'
import PannelSecure from './admin/PannelSecure'
import MessengerCustomerChat from 'react-messenger-customer-chat';

function Main() {
  return (
    <Router>
      <Switch>
      <Route path="/admin">
          <PannelSecure />
        </Route>
        <Route path="/en/home">
          <AppEn />
        </Route>
        <Route path="/rus/home">
          <AppRus />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  )
}

export default Main
