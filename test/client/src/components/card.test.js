import path from 'path';
import React from 'react';
import { expect } from 'chai';
import { times } from 'lodash';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Card, { maxChars, isNearLimit } from '../../../../client/src/components/card';
import { getRandomId, getCreateDate } from '../../../../client/src/content/get-idea';

// fixtures
import mockIdeas from '../../../fixtures/mock-ideas.json';

const sandbox = sinon.sandbox.create();
const idea = {
  id: getRandomId(1, 10000).toString(),
  createdDate: getCreateDate(),
  title: '',
  body: '',
};

let wrapper;
let updateIdeaSpy;
let deleteIdeaSpy;
let onEditSpy;

const shallowComponent = () => {
  updateIdeaSpy = sandbox.spy();
  deleteIdeaSpy = sandbox.spy();
  onEditSpy = sandbox.spy();
  const props = {
    id: idea.id,
    createdDate: idea.createdDate,
    updateIdea: updateIdeaSpy,
    deleteIdea: deleteIdeaSpy,
    onEdit: onEditSpy,
  };
  wrapper = shallow(<Card {...props} />);
};

describe(path.basename(__filename), () => {
  afterEach(() => {
    sandbox.restore();
  });

  describe('isNearLimit()', () => {
    describe(`when body is less than ${maxChars}`, () => {
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
    describe(`when body is more than ${maxChars}`, () => {
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
    describe(`when body is equal to ${maxChars}`, () => {
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

  describe('focus()', () => {
    before(() => {
      shallowComponent();
    });

    it('should set state correctly', () => {
      const initialState = wrapper.state().editingTitle;
      expect(initialState).to.equal(false);
      wrapper.instance().focus();
      const nextState = wrapper.state().editingTitle;
      expect(nextState).to.equal(true);
    });
  });

  describe('handleTitleChange()', () => {
    before(() => {
      shallowComponent();
      wrapper.setState({ inlineTitle: '', inlineBody: '' });
    });

    it('should set state, call updateIdea(), call onEdit()', () => {
      const initialState = wrapper.state().editingTitle;
      expect(initialState).to.equal(false);
      expect(updateIdeaSpy).to.have.property('callCount', 0);
      expect(onEditSpy).to.have.property('callCount', 0);

      const mockNewState = { inlineTitle: 'test title' };
      wrapper.instance().handleTitleChange(mockNewState);

      const nextState = wrapper.state();
      expect(nextState.editingTitle).to.equal(false);
      expect(nextState.inlineTitle).to.equal(mockNewState.inlineTitle);

      expect(updateIdeaSpy).to.have.property('callCount', 1);
      expect(onEditSpy).to.have.property('callCount', 1);
    });
  });

  describe('handleBodyChange()', () => {
    before(() => {
      shallowComponent();
      wrapper.setState({ inlineTitle: '', inlineBody: '' });
    });

    it('should set state, call updateIdea(), call onEdit()', () => {
      const initialState = wrapper.state().editingTitle;
      expect(initialState).to.equal(false);
      expect(updateIdeaSpy).to.have.property('callCount', 0);
      expect(onEditSpy).to.have.property('callCount', 0);

      const mockNewState = { inlineBody: 'test body' };
      wrapper.instance().handleBodyChange(mockNewState);

      const nextState = wrapper.state();
      expect(nextState.editingTitle).to.equal(false);
      expect(nextState.inlineBody).to.equal(mockNewState.inlineBody);

      expect(updateIdeaSpy).to.have.property('callCount', 1);
      expect(onEditSpy).to.have.property('callCount', 1);
    });
  });

  describe('handleDelete()', () => {
    before(() => {
      shallowComponent();
    });

    it('should call correctly', () => {
      const deleteEl = wrapper.find('.card-control');
      expect(deleteIdeaSpy).to.have.property('callCount', 0);
      deleteEl.simulate('click');
      expect(deleteIdeaSpy).to.have.property('callCount', 1);
    });
  });

  describe('body character count', () => {
    beforeEach(() => {
      shallowComponent();
    });

    it(`should show character count if body is greater than ${maxChars}`, () => {
      let charCountSpan = wrapper.find('.card-character-count');
      expect(charCountSpan.length).to.equal(0);

      const bodyText = times(maxChars + 1, () => [].concat('s')).join('');
      wrapper.setState({ inlineBody: bodyText });

      charCountSpan = wrapper.find('.card-character-count');
      expect(charCountSpan.length).to.equal(1);
    });

    it(`should not show character count if body is less than ${maxChars}`, () => {
      let charCountSpan = wrapper.find('.card-character-count');
      expect(charCountSpan.length).to.equal(0);

      const bodyText = times(maxChars - 20, () => [].concat('s')).join('');
      wrapper.setState({ inlineBody: bodyText });

      charCountSpan = wrapper.find('.card-character-count');
      expect(charCountSpan.length).to.equal(0);
    });
  });
});
