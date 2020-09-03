/*
 *
 * AddStringPage actions
 *
 */

import { ADD_STRING, SET_ERROR, SET_INPUT, SET_LOADING } from './constants';

export function addString() {
  return {
    type: ADD_STRING,
  };
}

export function setError(err) {
  return {
    type: SET_ERROR,
    err,
  };
}

export function setInput(input) {
  return {
    type: SET_INPUT,
    input,
  };
}

export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    isLoading,
  };
}
