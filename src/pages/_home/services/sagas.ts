import {ITEMS_PER_PAGE} from 'constants';
import {takeEvery, all, put, call} from 'redux-saga/effects';
import api from 'api/punk';
import type {SagaTypes} from 'types/sagas';
import {BeerCards} from 'types';
import {actions as homePageActions, actionTypes} from './actions';

function* requestBeers(
    action: ReturnType<typeof homePageActions.beersRequested>,
): SagaTypes<BeerCards> {
  const params = action.payload;

  try {
    const response = yield call(api.getBeers, params);

    yield put(homePageActions.beersSucceed({[params.page]: response}));

    if (response.length === ITEMS_PER_PAGE) {
      yield put(homePageActions.nextPageRequested({name: params.name, page: params.page + 1}));
    }
  } catch (error) {
    console.error(error);

    yield put(homePageActions.beersFailed(String(error)));
  }
}

function* requestNextPage(
    action: ReturnType<typeof homePageActions.nextPageRequested>,
): SagaTypes<BeerCards> {
  const params = action.payload;

  try {
    const response = yield call(api.getBeers, params);

    yield put(homePageActions.nextPageSucceed({[params.page]: response}));
  } catch (error) {
    console.error(error);

    yield put(homePageActions.nextPageFailed(String(error)));
  }
}

function* sagas() {
  yield all([takeEvery(actionTypes.BEERS_REQUESTED, requestBeers)]);
  yield all([takeEvery(actionTypes.NEXT_PAGE_REQUESTED, requestNextPage)]);
}

export default sagas;
