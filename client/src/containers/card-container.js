import { connect } from 'react-redux';
import Card from '../components/card';
import doUpdateIdea from '../content/update-idea';
import doDeleteIdea from '../content/delete-idea';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  updateIdea: (idea) => {
    dispatch(doUpdateIdea(idea));
  },
  deleteIdea: (idea) => {
    dispatch(doDeleteIdea(idea));
  },
});

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Card);
