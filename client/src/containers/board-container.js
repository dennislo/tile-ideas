import { connect } from 'react-redux';
import board from '../components/board';
import getIdeas from '../content/get-ideas';
import getIdea from '../content/get-idea';

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

const mapDispatchToProps = dispatch => ({
  getIdeasData: () => {
    getIdeas(dispatch);
  },
  getNewIdea: () => {
    getIdea(dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(board);
