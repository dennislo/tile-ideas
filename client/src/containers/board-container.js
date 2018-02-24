import { connect } from 'react-redux';
import board from '../components/board';
import getResults from '../content/get-ideas';

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

const mapDispatchToProps = dispatch => ({
  getIdeasData: () => {
    getResults(dispatch); // performs client side fetch
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(board);
