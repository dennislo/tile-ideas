import { ideaAdd } from '../actions/board-actions';

const addIdea = (dispatch, idea) => {
  dispatch(ideaAdd(idea));
};

export default addIdea;
