import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../containers/App/App'
import Admin from '../components/Admin/Admin'
import List from '../components/List/List'
import Genre from '../components/Genre/Genre'
import Release from '../components/Release/Release'
import Home from '../components/Home/Home'
import LoginPage from '../containers/LoginPage/LoginPage'
import NotFound from '../components/NotFound/NotFound'
import requireAuthentication from '../containers/AuthenticatedComponent/AuthenticatedComponent'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/admin' component={requireAuthentication(Admin)} />
      <Route path='/genre/:genre' component={Genre}>
        <Route path='/genre/:genre/:release' component={Release} />
      </Route>
      <Route path='/list' component={List} />
      <Route path='/login' component={LoginPage} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
