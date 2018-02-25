import path from 'path';
import { expect } from 'chai';
import boardReducer, { createNewState } from '../../../../client/src/reducers/board-reducer';
import { IDEA_ADD, IDEA_UPDATE, IDEA_DELETE } from '../../../../client/src/actions/types';

// fixtures
import mockIdeas from '../../../fixtures/mock-ideas.json';
import mockState from '../../../fixtures/mock-state.json';

describe(path.basename(__filename), () => {
  describe('createNewState()', () => {
    const state = {};
    const action = { payload: mockIdeas };

    it('should create new state', () => {
      const actual = createNewState(state, action);
      expect(actual).to.eql(mockState);
    });
  });

  describe('reducer', () => {
    const actionTypes = [IDEA_ADD, IDEA_UPDATE, IDEA_DELETE];
    actionTypes.forEach((type) => {
      describe(`action type "${type}"`, () => {
        const state = { ideas: [] };
        const action = { type, payload: mockIdeas };
        it('should be reduced correctly', () => {
          const returnedState = boardReducer(state, action);
          expect(returnedState).to.eql(mockState);
        });
      });
    });
  });
});
