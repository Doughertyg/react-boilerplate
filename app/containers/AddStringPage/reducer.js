/*
 *
 * AddStringPage reducer
 *
 */
import produce from 'immer';
import { ADD_STRING, SET_ERROR, SET_INPUT, SET_LOADING } from './constants';

export const initialState = {
  error: false,
  inputValue: '',
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const addStringPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_STRING:
        draft.error = false;
        break;
      case SET_ERROR:
        draft.error = action.err;
        draft.loading = false;
        break;
      case SET_INPUT:
        draft.inputValue = action.input;
        break;
      case SET_LOADING:
        draft.loading = action.isLoading;
        break;
    }
  });

export default addStringPageReducer;
