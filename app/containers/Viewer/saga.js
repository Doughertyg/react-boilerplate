import { call, put, takeLatest } from 'redux-saga/effects';

import { setStringList, setStringListError } from './actions';

import request from '../../utils/request';
import { GET_STRINGLIST } from './constants';

// Individual exports for testing
export function* getStringList() {
  const url = '/api/v1/strings';

  try {
    // fetch the string list from the server and update redux
    const stringlist = yield call(request, url);
    yield put(setStringList(stringlist));
  } catch (err) {
    yield put(setStringListError('Error: unable to read strings'));
  }
}

export default function* getStringListSaga() {
  // listen for GET_STRINGLIST action and trigger saga when encountered
  yield takeLatest(GET_STRINGLIST, getStringList);
}
