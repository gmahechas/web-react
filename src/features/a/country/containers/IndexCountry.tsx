import React from 'react'
import { Link, Switch, useRouteMatch } from 'react-router-dom';

import RouteWithSubRoutesShared from '../../../../shared/components/RouteWithSubRoutesShared';

import { ButtonShared } from '../../../../shared/components/prime';

function IndexCountry({ routes }: any) {
  let { url } = useRouteMatch();
  return (
    <div>
      <h2>Countries</h2>
      <Link to={`${url}/create`}><ButtonShared label="Crear" /></Link>
      <Link to={`${url}/edit/2`}><ButtonShared label="Editar" /></Link>
      <Switch>
        {routes.map((route: any, i: number) => (
          <RouteWithSubRoutesShared key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default IndexCountry;
