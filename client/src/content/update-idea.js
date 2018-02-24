import { findIndex } from 'lodash';
import { ideaUpdated } from '../actions/board-actions';

function doUpdateIdea(editedIdeaFromBoard) {
  return (dispatch, getState) => {
    // insert code for POST idea/update { "id": ":id", "title": ":title", "body": ":body" }

    const existingIdeas = getState().board.ideas;
    const updatedIdea = {
      id: editedIdeaFromBoard.id,
      createdDate: editedIdeaFromBoard.createdDate,
      title: editedIdeaFromBoard.inlineTitle,
      body: editedIdeaFromBoard.inlineBody,
    };

    // find item index and replace item at index, so store can be updated
    const index = findIndex(existingIdeas, { id: updatedIdea.id });
    existingIdeas.splice(index, 1, updatedIdea);

    dispatch(ideaUpdated(existingIdeas));
  };
}

export default doUpdateIdea;
