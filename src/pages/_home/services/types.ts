import type {GetBeersParams} from 'api/punk/types';
import type {AsyncStateTypes} from 'services/async-state-reducer/types';
import type {BeerCards} from 'types';
import {actions} from './actions';

export type BeersRequestParams = GetBeersParams;
export interface BeersSucceedPayload {
  [key: number]: BeerCards;
}

export interface HomePageState {
  mainState: {
    pages: {
      [key: number]: BeerCards;
    };
  };
  asyncState: AsyncStateTypes;
}

export type HomePageMainState = HomePageState['mainState'];
export type HomePageCardsAsyncState = HomePageState['asyncState'];

export type ActionTypes = ReturnType<typeof actions[keyof typeof actions]>;
