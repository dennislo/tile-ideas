import { findIndex } from 'lodash';
import { ideaDeleted } from '../actions/board-actions';

function doDeleteIdea(editedIdeaFromBoard) {
  return (dispatch, getState) => {
    // insert code for POST idea/delete { "id": ":id" }

    const existingIdeas = getState().board.ideas;

    // find item index and delete item at index, so store can be updated
    const index = findIndex(existingIdeas, { id: editedIdeaFromBoard.id });
    existingIdeas.splice(index, 1);

    dispatch(ideaDeleted(existingIdeas));
  };
}

export default doDeleteIdea;
