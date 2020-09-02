/*
 *
 * Viewer actions
 *
 */

import {
  GET_STRINGLIST,
  SET_STRINGLIST,
  SET_STRINGLIST_ERROR,
  SET_LOADING,
} from './constants';

/**
 * action that triggers saga to fetch string list
 */
export function getStringList() {
  return {
    type: GET_STRINGLIST,
  };
}

/**
 * action that updates the redux store with fetched string list
 * @param {Array} stringlist array of string
 */
export function setStringList(stringlist) {
  return {
    type: SET_STRINGLIST,
    stringlist,
  };
}

/**
 * action that sets the error message in the redux store
 * @param {string} err error message
 */
export function setStringListError(err) {
  return {
    type: SET_STRINGLIST_ERROR,
    err,
  };
}

/**
 * action to set the loading state in redux
 * @param {boolean} isLoading bool value respresenting if currently loading
 */
export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    isLoading,
  };
}
