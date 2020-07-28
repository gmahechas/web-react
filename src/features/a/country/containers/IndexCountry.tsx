import React from 'react'
import { Link, Switch, useRouteMatch } from 'react-router-dom';

import RouteWithSubRoutesShared from '../../../../shared/components/RouteWithSubRoutesShared';

function IndexCountry({ routes }: any) {
  let { url } = useRouteMatch();
  return (
    <div>
      <Link to={`${url}/create`}>Create</Link>
      <Link to={`${url}/edit/2`}>Edit</Link>
      <h3>List</h3>
      <Switch>
        {routes.map((route: any, i: number) => (
          <RouteWithSubRoutesShared key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default IndexCountry;