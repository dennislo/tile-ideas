// import fetch from 'isomorphic-fetch';
import { ideasDataRecieved } from '../actions/board-actions';

// const ideas = [
//   {
//     id: '1',
//     createdDate: '24 Feb 2018',
//     title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     id: '2',
//     createdDate: '24 Feb 2018',
//     title: '',
//     body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     id: '3',
//     createdDate: '24 Feb 2018',
//     title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     body: '',
//   },
//   {
//     id: '4',
//     createdDate: '24 Feb 2018',
//     title: '',
//     body: '',
//   },
// ];
const ideas = [];

const getIdeas = (dispatch) => {
  dispatch(ideasDataRecieved(ideas));

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
