/*
 *
 * Viewer reducer
 *
 */
import produce from 'immer';
import {
  SET_STRINGLIST,
  SET_STRINGLIST_ERROR,
  SET_LOADING,
  GET_STRINGLIST,
} from './constants';

export const initialState = {
  error: false,
  loading: false,
  stringlist: [],
};

/* eslint-disable default-case, no-param-reassign */
const viewerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_STRINGLIST:
        draft.loading = true;
        draft.error = false;
        break;
      case SET_STRINGLIST:
        draft.loading = false;
        draft.stringlist = action.stringlist;
        break;
      case SET_STRINGLIST_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case SET_LOADING:
        draft.loading = action.isLoading;
        break;
    }
  });

export default viewerReducer;
