// import produce from 'immer';
import viewerReducer from '../reducer';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('viewerReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      error: false,
      loading: false,
      stringlist: [],
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(viewerReducer(undefined, {})).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
