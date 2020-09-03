import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addStringPage state domain
 */

const selectAddStringPageDomain = state => state.addStringPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddStringPage
 */

const makeSelectAddStringPage = () =>
  createSelector(
    selectAddStringPageDomain,
    substate => substate,
  );

export default makeSelectAddStringPage;
export { selectAddStringPageDomain };
