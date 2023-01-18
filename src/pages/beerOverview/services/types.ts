import type {GetBeerParams} from 'api/punk/types';
import type {AsyncStateTypes} from 'services/async-state-reducer/types';
import type {BeerCard} from 'types';
import {actions} from './actions';

export type BeersRequestParams = GetBeerParams;
export interface BeersSucceedPayload {
  card: BeerCard;
}

export interface BeerOverviewPageState {
  mainState: {
    card?: BeerCard;
  };
  cardAsyncState: AsyncStateTypes;
}

export type BeerOverviewMainState = BeerOverviewPageState['mainState'];
export type BeerOverviewTableAsyncState = BeerOverviewPageState['cardAsyncState'];

export type ActionTypes = ReturnType<typeof actions[keyof typeof actions]>;
