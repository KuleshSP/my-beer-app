import {takeEvery, all, put, call} from 'redux-saga/effects';
import api from 'api/punk';
import type {SagaTypes} from 'types/sagas';
import {BeerCards} from 'types';
import {actions as beerOverviewActions, actionTypes} from './actions';

function* mountPage(action: ReturnType<typeof beerOverviewActions.mountPage>) {
  const params = action.payload;

  yield put(beerOverviewActions.beerRequested(params));
}

function* getBeer(
    action: ReturnType<typeof beerOverviewActions.beerRequested>,
): SagaTypes<BeerCards> {
  const params = action.payload;

  try {
    const response = yield call(api.getBeer, params);

    yield put(beerOverviewActions.beerSucceed({card: response[0]}));
  } catch (error) {
    console.error(error);

    yield put(beerOverviewActions.beerFailed(String(error)));
  }
}

function* sagas() {
  yield all([takeEvery(actionTypes.MOUNT_PAGE, mountPage)]);
  yield all([takeEvery(actionTypes.BEER_REQUESTED, getBeer)]);
}

export default sagas;
