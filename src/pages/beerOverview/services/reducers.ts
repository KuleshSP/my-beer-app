import {combineReducers} from 'redux';
import {makeAsyncStateReducer} from 'services/async-state-reducer';
import {actionTypes} from './actions';
import type {ActionTypes, BeerOverviewMainState} from './types';

const initialState: BeerOverviewMainState = {
  card: undefined,
};

const reducer = (state = initialState, action: ActionTypes): BeerOverviewMainState => {
  switch (action.type) {
    case actionTypes.BEER_SUCCEED:
      return {
        ...state,
        card: action.payload.card,
      };

    case actionTypes.UNMOUNT_PAGE:
      return initialState;

    default:
      return state;
  }
};

export default combineReducers({
  mainState: reducer,
  cardAsyncState: makeAsyncStateReducer(
      actionTypes.BEER_REQUESTED,
      actionTypes.BEER_SUCCEED,
      actionTypes.BEER_FAILED,
  ),
});
