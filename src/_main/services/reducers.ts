import {combineReducers} from 'redux';
import homePageReducer from 'pages/_home/services/reducers';
import beerOverviewReducer from 'pages/beerOverview/services/reducers';

export const rootReducer = combineReducers({
  homePage_state: homePageReducer,
  beerOverview_state: beerOverviewReducer,
});
