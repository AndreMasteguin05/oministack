import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from '../Pages/Main'
import SignUp from '../Pages/Auth/SignUp'
import SignIn from '../Pages/Auth/SignIn'


const Routes = () =>
  (
    <BrowserRouter>
      <Switch>
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  )



export default Routes