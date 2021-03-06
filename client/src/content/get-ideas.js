// import fetch from 'isomorphic-fetch';
import { ideasDataRecieved } from '../actions/board-actions';

const ideas = []; // mock server response

const getIdeas = (dispatch, ideasFromStorage) => {
  if (ideasFromStorage) {
    dispatch(ideasDataRecieved(ideasFromStorage));
  } else {
    dispatch(ideasDataRecieved(ideas));
  }

  // GET ideas/ -> [{"id": ":id", "created_date": ":created_date", "title": ":title", "body": ":body"}, {}, ...]
  /*
  const url = 'https://api.com/ideas';
  dispatch(ideasDataRequested())
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.log(response);
      }
      return response.json();
    })
    .then((json) => {
      dispatch(ideasDataRecieved(json));
    })
    .catch((error) => {
      dispatch(ideasDataNotRecieved(error));
    });
  */
};

export default getIdeas;
