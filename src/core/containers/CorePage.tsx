import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import RouteWithSubRoutesShared from '../../shared/components/RouteWithSubRoutesShared';
import HeaderCore from '../components/HeaderCore';

import routes from './../../routes';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function CorePage() {
  return (
    <Router>
      <HeaderCore />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutesShared key={i} {...route} />
          ))}
        </Switch>
      </Suspense>

    </Router>
  )
}

export default CorePage;
