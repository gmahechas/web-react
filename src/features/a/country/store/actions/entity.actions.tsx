export enum EntityActionsTypes {
  LoadEntity = '[Country] Load Entity',
  LoadSuccessEntity = '[Country] Load Success Entity',
  StoreEntity = '[Country] Store Entity',
  StoreSuccessEntity = '[Country] Store Success Entity',
}

export const LoadEntity = (payload: any) => ({
  type: EntityActionsTypes.LoadEntity,
  ...payload
});

export const LoadSuccessEntity = (payload: any) => ({
  type: EntityActionsTypes.LoadSuccessEntity,
  ...payload
});

export const StoreEntity = (payload: any) => ({
  type: '[Country] Store Entity',
  ...payload
});

export const StoreSuccessEntity = (payload: any) => ({
  type: '[Country] Store Success Entity',
  ...payload
});