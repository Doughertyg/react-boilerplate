import { takeLatest, call, put, select } from 'redux-saga/effects';
import { ADD_STRING } from './constants';
import request from '../../utils/request';
import { makeSelectInput } from './selectors';
import { setLoading, setError, setInput } from './actions';

export function* addString() {
  const url = '/api/v1/strings';
  const input = yield select(makeSelectInput());
  const strObj = {
    string: input,
    key: input
      .trim()
      .split(' ')
      .join(''),
  };

  try {
    yield put(setLoading(true));
    // add the string
    yield call(request, url, 'POST', strObj);
    yield put(setLoading(false));
    yield put(setInput(''));
  } catch (err) {
    yield put(setError('Error: unable to add string'));
    yield put(setInput(''));
  }
}

export default function* addStringSaga() {
  // listen for ADD_STRING action and trigger saga
  yield takeLatest(ADD_STRING, addString);
}
