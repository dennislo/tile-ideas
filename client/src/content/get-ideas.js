// import fetch from 'isomorphic-fetch';
import { ideasDataRequested, ideasDataRecieved, ideasDataNotRecieved } from '../actions/board-actions';

const getIdeas = (dispatch) => {
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
