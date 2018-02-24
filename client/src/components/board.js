import React, { Component } from 'react';
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
    const id = getRandomInt(1, 10000).toString(); // should let server generate, random int from 1 to 10000
    const createdDate = Date.now().toString(); // should let server generate, time in ms
    const newIdea = { id, createdDate, title: '', body: '' };
    // console.log(newIdea);
    const { addNewIdea } = this.props;
    addNewIdea(newIdea);
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
          ideas.map(idea => <Card key={idea.id} {...idea} />)
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
