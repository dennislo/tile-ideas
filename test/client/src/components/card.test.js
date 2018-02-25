import path from 'path';
// import React from 'react';
import { expect } from 'chai';
import { times } from 'lodash';
// import { shallow } from 'enzyme';
// import sinon from 'sinon';
import { maxChars, limitChars, isNearLimit } from '../../../../client/src/components/card';
// import { getRandomId, getCreateDate } from '../../../../client/src/content/get-idea';

// fixtures
import mockIdeas from '../../../fixtures/mock-ideas.json';

// const sandbox = sinon.sandbox.create();
// const idea = {
//   id: getRandomId(1, 10000).toString(),
//   createdDate: getCreateDate(),
//   title: '',
//   body: '',
// };

// let wrapper;
// let updateIdeaSpy;
// let deleteIdeaSpy;
//
// const shallowComponent = () => {
//   updateIdeaSpy = sandbox.spy();
//   deleteIdeaSpy = sandbox.spy();
//   const props = { updateIdea: updateIdeaSpy, deleteIdea: deleteIdeaSpy, id: idea.id, createdDate: idea.createdDate };
//   wrapper = shallow(<Card {...props} />);
// };

describe(path.basename(__filename), () => {
  describe('isNearLimit()', () => {
    describe('when body is less than maxChars', () => {
      it('should return correctly', () => {
        const bodyText = mockIdeas[0].body;
        const actual = isNearLimit(bodyText);
        const expected = {
          nearLimit: false,
          charsRemaining: 61,
          charsCount: 79,
        };
        expect(actual).to.eql(expected);
      });
    });
    describe('when body is more than maxChars', () => {
      it('should return correctly', () => {
        const bodyText = mockIdeas[1].body;
        const actual = isNearLimit(bodyText);
        const expected = {
          nearLimit: true,
          charsRemaining: 0,
          charsCount: 463,
        };
        expect(actual).to.eql(expected);
      });
    });
    describe('when body is equal to maxChars', () => {
      it('should return correctly', () => {
        const bodyText = times(maxChars, () => [].concat('s')).join('');
        const actual = isNearLimit(bodyText);
        const expected = {
          nearLimit: true,
          charsRemaining: 0,
          charsCount: 140,
        };
        expect(actual).to.eql(expected);
      });
    });
  });
});
