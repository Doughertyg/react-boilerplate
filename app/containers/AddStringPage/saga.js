import { takeLatest, call, put, select } from 'redux-saga/effects';
import { ADD_STRING } from './constants';
import request from '../../utils/request';
import makeSelectInput from './selectors';
import { setLoading, setError } from './actions';

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
  console.log('in addString saga, input: ', input, ' url: ', url);

  try {
    console.log('set loading to true');
    yield put(setLoading(true));
    // add the string
    yield call(request, url, 'POST', strObj);
    yield put(setLoading(false));
  } catch (err) {
    yield put(setError('Error: unable to add string'));
  }
}

export default function* addStringSaga() {
  // listen for ADD_STRING action and trigger saga
  yield takeLatest(ADD_STRING, addString);
}
