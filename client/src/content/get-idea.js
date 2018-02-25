import { ideaAdd } from '../actions/board-actions';

export const getRandomId = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

export const getCreateDate = () => Date.now().toString();

const getIdea = (dispatch) => {
  // insert code for GET ideas/new -> { "id": ":id", "created_date": ":created_date" }

  const id = getRandomId(1, 10000).toString(); // random id from 1 to 10000
  const createdDate = getCreateDate(); // time in ms
  const newIdea = { id, createdDate, title: '', body: '' };

  dispatch(ideaAdd(newIdea));
};

export default getIdea;
