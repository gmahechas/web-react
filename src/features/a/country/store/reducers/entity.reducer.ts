import { ICountry } from "../../models/country.interface";
import { EntityActions } from "../actions";
import { IAction } from "../../../../../shared/utils/action.interface";


export interface State {
  entities: ICountry[]
}

export const initialState: State = {
  entities: []
};

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    /*     case EntityActions.EntityActionsTypes.LoadEntity:
          return { ...state } */
    case EntityActions.EntityActionsTypes.LoadSuccessEntity:
      return { ...state, entities: action.payload }
    /*     case EntityActions.EntityActionsTypes.StoreEntity:
          return { ...state } */
    case EntityActions.EntityActionsTypes.StoreSuccessEntity:
      return { ...state, entities: [...state.entities, action.payload] }
    default:
      return state;
  }
}