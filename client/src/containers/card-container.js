import { connect } from 'react-redux';
import Card from '../components/card';
import doUpdateIdea from '../content/update-idea';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  updateIdea: (idea) => {
    dispatch(doUpdateIdea(idea));
  },
});

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Card);
