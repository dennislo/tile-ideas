import path from 'path';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Board, { sortIdeas } from '../../../../client/src/components/board';

// fixtures
import mockIdeas from '../../../fixtures/mock-ideas.json';

const sandbox = sinon.sandbox.create();

let wrapper;
let getIdeasDataSpy;
let getNewIdeaSpy;
let addNotificationSpy;

const mountComponent = (ideas) => {
  getNewIdeaSpy = sandbox.spy();
  getIdeasDataSpy = sandbox.spy();
  const props = { getIdeasData: getIdeasDataSpy, getNewIdea: getNewIdeaSpy };
  wrapper = mount(<Board {...props} />);

  if (ideas) {
    wrapper.setState({ ideas });
  }
};

const renderComponent = () => {
  getNewIdeaSpy = sandbox.spy();
  getIdeasDataSpy = sandbox.spy();
  const props = { getIdeasData: getIdeasDataSpy, getNewIdea: getNewIdeaSpy };
  wrapper = shallow(<Board {...props} />);
};

describe(path.basename(__filename), () => {
  before(() => {
    mountComponent();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call getIdeasData() on mount', () => {
    expect(getIdeasDataSpy).to.have.property('callCount', 1);
  });

  describe('when add button is clicked', () => {
    before(() => {
      mountComponent();
    });

    it('should call getNewIdea()', () => {
      const inputEl = wrapper.find('.js-add-button');
      expect(getNewIdeaSpy).to.have.property('callCount', 0);
      inputEl.simulate('click');
      expect(getNewIdeaSpy).to.have.property('callCount', 1);
    });
  });

  describe('sortIdeas()', () => {
    const sortFields = ['title', 'createdDate'];
    sortFields.forEach((field) => {
      it(`should sort ideas by "${field}"`, () => {
        const actual = sortIdeas(mockIdeas, field);
        expect(actual).to.be.sortedBy(field);
      });
    });
  });

  describe('showNotification()', () => {
    before(() => {
      renderComponent();
      addNotificationSpy = sandbox.spy();
      wrapper.instance().notificationSystem = {
        addNotification: addNotificationSpy,
      };
    });

    afterEach(() => {
      sandbox.resetHistory();
    });

    const notificationTypes = ['Title', 'Body'];
    notificationTypes.forEach((type) => {
      it(`should called addNotification("${type}") with correct arguments`, () => {
        expect(addNotificationSpy).to.have.property('callCount', 0);
        wrapper.instance().showNotification(type);
        const expectCallArg = {
          autoDismiss: 2,
          title: 'Changes saved',
          message: `Your changes to the "${type}" were saved`,
          level: 'success',
        };
        expect(addNotificationSpy.calledWith(expectCallArg)).to.equal(true);
        expect(addNotificationSpy).to.have.property('callCount', 1);
      });
    });
  });
});
