import React, { Component } from 'react';
import Card from './card';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getIdeasData } = this.props;
    getIdeasData();
  }

  render() {
    const { board } = this.props;
    let ideas = [];
    if (board && board.ideas) {
      ideas = board.ideas;
    }
    return (<div className="container">
      <button>
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

export default Board;
