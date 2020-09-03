import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addStringPage state domain
 */

const selectAddStringPageDomain = state => state.addStringPage || initialState;

const makeSelectInput = () =>
  createSelector(
    selectAddStringPageDomain,
    substate => substate.inputValue,
  );

const makeSelectLoading = () =>
  createSelector(
    selectAddStringPageDomain,
    substate => substate.loading,
  );

export { selectAddStringPageDomain, makeSelectInput, makeSelectLoading };
