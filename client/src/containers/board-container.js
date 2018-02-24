import { connect } from 'react-redux';
import board from '../components/board';
import getIdeas from '../content/get-ideas';
import addIdea from '../content/add-idea';

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

const mapDispatchToProps = dispatch => ({
  getIdeasData: () => {
    getIdeas(dispatch); // performs client side fetch
  },
  addNewIdea: (newIdea) => {
    addIdea(dispatch, newIdea);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(board);
