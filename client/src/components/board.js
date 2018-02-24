import React, { Component, ReactDOM } from 'react';
import PropTypes from 'prop-types';
import Card from './card';

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

class Board extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    const { getIdeasData } = this.props;
    getIdeasData();
  }

  handleAdd() {
    const id = getRandomInt(1, 10000).toString(); // TODO let server generate, random int from 1 to 10000
    const createdDate = Date.now().toString(); // TODO let server generate, time in ms
    const newIdea = { id, createdDate, title: '', body: '' };
    // console.log(newIdea);
    const { addNewIdea } = this.props;
    addNewIdea(newIdea);
  }

  componentDidUpdate() {
    if (this.props.board.ideas.length > 0) {
      this.card.focus();
    }
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
  addNewIdea: PropTypes.func.isRequired,
};

export default Board;
