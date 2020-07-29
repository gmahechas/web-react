import React from 'react'
import { Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { helloSaga } from '../store/effects/entity.effects';

import RouteWithSubRoutesShared from '../../../../shared/components/RouteWithSubRoutesShared';
import { TableShared } from '../../../../shared/components/prime';

import { reducer } from '../store/reducers/entity.reducer'

/* import { IAction } from '../../../../shared/utils/action.interface'; */

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(helloSaga)
/* const dispatch = (action: IAction) => store.dispatch(action); */

function IndexCountry({ routes }: any) {


  return (
    <div>
      <h2>Countries</h2>
      <TableShared items={store.getState().entities} />
      <Switch>
        {routes.map((route: any, i: number) => (
          <RouteWithSubRoutesShared key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default IndexCountry;
