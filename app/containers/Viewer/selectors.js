import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the viewer state domain
 */

const selectViewerDomain = state => state.viewer || initialState;

const makeSelectError = () =>
  createSelector(
    selectViewerDomain,
    viewerState => viewerState.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectViewerDomain,
    viewerState => viewerState.loading,
  );

const makeSelectStringList = () =>
  createSelector(
    selectViewerDomain,
    viewerState => viewerState.stringlist,
  );

export {
  makeSelectError,
  makeSelectLoading,
  makeSelectStringList,
  selectViewerDomain,
};
