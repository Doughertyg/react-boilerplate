import { getStringList } from '../actions';
import { GET_STRINGLIST } from '../constants';

describe('Viewer actions', () => {
  describe('getStringList action', () => {
    it('has a type of GET_STRINGLIST', () => {
      const expected = {
        type: GET_STRINGLIST,
      };
      expect(getStringList()).toEqual(expected);
    });
  });
});
