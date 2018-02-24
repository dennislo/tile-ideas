import { ideaAdd } from '../actions/board-actions';

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const getIdea = (dispatch) => {
  // insert code for GET ideas/new -> { "id": ":id", "created_date": ":created_date" }

  const id = getRandomInt(1, 10000).toString(); // random int from 1 to 10000
  const createdDate = Date.now().toString(); // time in ms
  const newIdea = { id, createdDate, title: '', body: '' };

  setTimeout(() => {
    dispatch(ideaAdd(newIdea));
  }, 100); // increase to simulate slow XHR
};

export default getIdea;
