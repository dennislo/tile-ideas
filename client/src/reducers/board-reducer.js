import { saveToStorage } from '../storage/local';
import {
  IDEAS_DATA_REQUESTED,
  IDEAS_DATA_RECEIVED,
  IDEAS_DATA_NOT_RECEIVED,
  IDEA_ADD,
  IDEA_UPDATE,
  IDEA_DELETE,
} from '../actions/types';

const defaultState = { ideas: [] };

export const createNewState = (state, action) => {
  const newState = {
    ...state,
    isFetching: false,
    ideas: action.payload,
  };
  saveToStorage('state', newState); // persist in storage
  return newState;
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case IDEAS_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case IDEAS_DATA_RECEIVED:
      return {
        ...state,
        isFetching: false,
        ideas: action.payload,
      };
    case IDEAS_DATA_NOT_RECEIVED:
      return {
        ...state,
        isFetching: false,
        ...action.payload,
      };
    case IDEA_ADD:
      const actionWithUpdatedPayload = { payload: state.ideas.concat(action.payload) };
      return createNewState(state, actionWithUpdatedPayload);
    case IDEA_UPDATE:
    case IDEA_DELETE:
      return createNewState(state, action);
    default:
      return state;
  }
};
