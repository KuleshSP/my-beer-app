import type {BeersRequestParams, BeersSucceedPayload} from './types';

export const actionTypes = {
  MOUNT_PAGE: 'HOME_PAGE/MOUNT_PAGE' as const,
  UNMOUNT_PAGE: 'HOME_PAGE/UNMOUNT_PAGE' as const,

  BEERS_REQUESTED: 'HOME_PAGE/BEERS_REQUESTED' as const,
  BEERS_SUCCEED: 'HOME_PAGE/BEERS_SUCCEED' as const,
  BEERS_FAILED: 'HOME_PAGE/BEERS_FAILED' as const,

  NEXT_PAGE_REQUESTED: 'HOME_PAGE/NEXT_PAGE_REQUESTED' as const,
  NEXT_PAGE_SUCCEED: 'HOME_PAGE/NEXT_PAGE_SUCCEED' as const,
  NEXT_PAGE_FAILED: 'HOME_PAGE/NEXT_PAGE_FAILED' as const,
};

export const actions = {
  mountPage: () => ({
    type: actionTypes.MOUNT_PAGE,
  }),
  unmountPage: () => ({
    type: actionTypes.UNMOUNT_PAGE,
  }),

  beersRequested: (payload: BeersRequestParams) => ({
    type: actionTypes.BEERS_REQUESTED,
    payload,
  }),
  beersSucceed: (payload: BeersSucceedPayload) => ({
    type: actionTypes.BEERS_SUCCEED,
    payload,
  }),
  beersFailed: (error: Error | string) => ({
    type: actionTypes.BEERS_FAILED,
    error,
  }),

  nextPageRequested: (payload: BeersRequestParams) => ({
    type: actionTypes.NEXT_PAGE_REQUESTED,
    payload,
  }),
  nextPageSucceed: (payload: BeersSucceedPayload) => ({
    type: actionTypes.NEXT_PAGE_SUCCEED,
    payload,
  }),
  nextPageFailed: (error: Error | string) => ({
    type: actionTypes.NEXT_PAGE_FAILED,
    error,
  }),
};
