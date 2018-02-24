import { connect } from 'react-redux';
import board from '../components/board';
import getResults from '../content/get-ideas';

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
  getIdeasData: (term) => {
    getResults(dispatch, term); // performs client side fetch
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(board);
