import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the viewer state domain
 */

const selectViewerDomain = state => state.viewer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Viewer
 */

const makeSelectViewer = () =>
  createSelector(
    selectViewerDomain,
    substate => substate,
  );

export default makeSelectViewer;
export { selectViewerDomain };
