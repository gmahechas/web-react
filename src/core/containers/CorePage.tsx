import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import RouteWithSubRoutesShared from '../../shared/components/RouteWithSubRoutesShared';
import MenuCore from '../components/MenuCore';

import routes from './../../routes';

function CorePage() {
  return (
    <Router>
      <MenuCore />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutesShared key={i} {...route} />
        ))}
      </Switch>
    </Router>
  )
}

export default CorePage;
