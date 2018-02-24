import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';
import CardContainer from '../containers/card-container';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { ideas: [], sortBy: 'title' };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  componentDidMount() {
    this.props.getIdeasData(); // perform xhr fetch
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.board !== nextProps.board) {
      this.setState({ ideas: nextProps.board.ideas });
    }
  }

  componentDidUpdate() {
    if (this.props.board.ideas.length > 0) {
      if (this.card) {
        this.card.focus();
      }
    }
  }

  handleAdd() {
    const { getNewIdea } = this.props;
    getNewIdea();
  }

  handleSortChange(e) {
    const selectedSortBy = e.target.value;
    this.setState({ sortBy: selectedSortBy });
    const ideas = this.props.board.ideas;
    const sorted = sortBy(ideas, o => o[selectedSortBy]);
    console.log(sorted);
    this.setState({ ideas: sorted });
  }

  render() {
    let ideas = [];
    if (this.state.ideas) {
      ideas = this.state.ideas;
    }
    return (<div className="container">
      <button onClick={this.handleAdd}>
        Add
      </button>
      <br />
      <label htmlFor="sort-by">
        Sort by:
        <select id="sort-by" value={this.state.sortBy} onChange={this.handleSortChange}>
          <option value="title">Title</option>
          <option value="createDate">Create date</option>
        </select>
      </label>
      <div className="cards">
        {
          ideas.map(idea => <CardContainer key={idea.id} {...idea} ref={(instance) => {
            if (!!instance) { // not availble after inline update
              this.card = instance.getWrappedInstance(); // use getWrappedInstance() since its redux connected
            }
          }} />)
        }
      </div>
    </div>);
  }
}

Board.propTypes = {
  board: PropTypes.object.isRequired,
  getIdeasData: PropTypes.func.isRequired,
  getNewIdea: PropTypes.func.isRequired,
};

export default Board;
