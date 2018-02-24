import { IDEAS_DATA_REQUESTED, IDEAS_DATA_RECEIVED, IDEAS_DATA_NOT_RECEIVED } from '../actions/types';

export default (state = {}, action = {}) => {
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
    default:
      return state;
  }
}