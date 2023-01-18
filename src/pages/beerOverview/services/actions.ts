import type {BeersRequestParams, BeersSucceedPayload} from './types';

export const actionTypes = {
  MOUNT_PAGE: 'BEER_OVERVIEW_PAGE/MOUNT_PAGE' as const,
  UNMOUNT_PAGE: 'BEER_OVERVIEW_PAGE/UNMOUNT_PAGE' as const,

  BEER_REQUESTED: 'BEER_OVERVIEW_PAGE/BEER_REQUESTED' as const,
  BEER_SUCCEED: 'BEER_OVERVIEW_PAGE/BEER_SUCCEED' as const,
  BEER_FAILED: 'BEER_OVERVIEW_PAGE/BEER_FAILED' as const,
};

export const actions = {
  mountPage: (payload: BeersRequestParams) => ({
    type: actionTypes.MOUNT_PAGE,
    payload,
  }),
  unmountPage: () => ({
    type: actionTypes.UNMOUNT_PAGE,
  }),

  beerRequested: (payload: BeersRequestParams) => ({
    type: actionTypes.BEER_REQUESTED,
    payload,
  }),
  beerSucceed: (payload: BeersSucceedPayload) => ({
    type: actionTypes.BEER_SUCCEED,
    payload,
  }),
  beerFailed: (error: Error | string) => ({
    type: actionTypes.BEER_FAILED,
    error,
  }),
};
