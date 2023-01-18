import type {RootState} from '_main/services/types';
import type {HomePageMainState, HomePageCardsAsyncState} from './types';

export const getHomePageState = (state: RootState): HomePageMainState =>
  state.homePage_state.mainState;

export const getCardsAsyncState = (state: RootState): HomePageCardsAsyncState =>
  state.homePage_state.asyncState;
