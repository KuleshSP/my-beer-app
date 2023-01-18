import {combineReducers} from 'redux';
import {makeAsyncStateReducer} from 'services/async-state-reducer';
import {actionTypes} from './actions';
import type {ActionTypes, HomePageMainState} from './types';

const initialState: HomePageMainState = {
  pages: {},
};

const reducer = (state = initialState, action: ActionTypes): HomePageMainState => {
  switch (action.type) {
    case actionTypes.BEERS_SUCCEED: {
      return {
        ...state,
        pages: {...state.pages, ...action.payload},
      };
    }

    case actionTypes.NEXT_PAGE_SUCCEED: {
      return {
        ...state,
        pages: {...state.pages, ...action.payload},
      };
    }

    case actionTypes.UNMOUNT_PAGE:
      return initialState;

    default:
      return state;
  }
};

export default combineReducers({
  mainState: reducer,
  asyncState: makeAsyncStateReducer(
      actionTypes.BEERS_REQUESTED,
      actionTypes.BEERS_SUCCEED,
      actionTypes.BEERS_FAILED,
  ),
});
