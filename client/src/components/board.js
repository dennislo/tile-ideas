import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './card';

class Board extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    const { getIdeasData } = this.props;
    getIdeasData();
  }

  componentDidUpdate() {
    if (this.props.board.ideas.length > 0) {
      this.card.focus();
    }
  }

  handleAdd() {
    const { getNewIdea } = this.props;
    getNewIdea();
  }

  render() {
    const { board } = this.props;
    let ideas = [];
    if (board && board.ideas) {
      ideas = board.ideas;
    }
    return (<div className="container">
      <button onClick={this.handleAdd}>
        Add
      </button>
      <div className="cards">
        {
          ideas.map(idea => <Card key={idea.id} {...idea} ref={(instance) => {
            this.card = instance;
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
