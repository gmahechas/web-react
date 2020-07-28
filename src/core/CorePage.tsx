import React from 'react'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import routes from './../routes';
import RouteWithSubRoutesShared from '../shared/components/RouteWithSubRoutesShared';

function CorePage() {
  return (
    <Router>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/country">Country</Link> |{" "}
      <Link to="/estate">Estate</Link> |{" "}
      <Link to="/city">City</Link>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutesShared key={i} {...route} />
        ))}
      </Switch>
    </Router>
  )
}

export default CorePage;
