import type {RootState} from '_main/services/types';
import type {BeerOverviewMainState, BeerOverviewTableAsyncState} from './types';

export const getBeerOverviewPageState = (state: RootState): BeerOverviewMainState =>
  state.beerOverview_state.mainState;

export const getCardAsyncState = (state: RootState): BeerOverviewTableAsyncState =>
  state.beerOverview_state.cardAsyncState;
