import { ideaUpdated } from '../actions/board-actions';

function doUpdateIdea(ideaFromBoard) {
  return (dispatch, getState) => {
    // Mocks POST idea/update { "id": ":id", "title": ":title", "body": ":body" }
    const existingIdeas = getState().board.ideas;
    console.log(existingIdeas);
    console.log(ideaFromBoard);
    dispatch(ideaUpdated(existingIdeas));
  };
}

export default doUpdateIdea;
