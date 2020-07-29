import { put } from 'redux-saga/effects'

import { EntityActions } from '../actions';

export function* helloSaga() {
  yield put({
    type: EntityActions.EntityActionsTypes.LoadSuccessEntity,
    payload: [
      { id: 1, countryName: 'Colombia', countryCode: 'CO' },
      { id: 2, countryName: 'Estados Unidos', countryCode: 'EEUU' },
      { id: 3, countryName: 'Mexico', countryCode: 'MX' }
    ]
  })
}