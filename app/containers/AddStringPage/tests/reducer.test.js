// import produce from 'immer';
import addStringPageReducer from '../reducer';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('addStringPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      error: false,
      inputValue: '',
      loading: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(addStringPageReducer(undefined, {})).toEqual(expectedResult);
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
