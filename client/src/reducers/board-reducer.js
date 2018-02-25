import {
  IDEAS_DATA_REQUESTED,
  IDEAS_DATA_RECEIVED,
  IDEAS_DATA_NOT_RECEIVED,
  IDEA_ADD,
  IDEA_UPDATE,
  IDEA_DELETE,
} from '../actions/types';

const defaultState = { ideas: [] };

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
      const newIdeas = state.ideas.concat(action.payload);
      return {
        ...state,
        isFetching: false,
        ideas: newIdeas,
      };
    case IDEA_UPDATE:
    case IDEA_DELETE:
      return {
        ...state,
        isFetching: false,
        ideas: action.payload,
      };
    default:
      return state;
  }
};
