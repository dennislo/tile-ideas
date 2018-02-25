import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';
import NotificationSystem from 'react-notification-system';
import CardContainer from '../containers/card-container';
import { getFromStorage } from '../storage/local';

export const sortIdeas = (ideas, field) => sortBy(ideas, o => o[field]);

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { ideas: [], sortBy: 'title' };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.showNotification = this.showNotification.bind(this);
  }

  componentDidMount() {
    const stateFromStorage = getFromStorage('state');
    if (stateFromStorage) {
      this.props.getIdeasData(stateFromStorage.ideas); // dispatch to update store
    } else {
      this.props.getIdeasData(); // perform xhr fetch
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.board !== nextProps.board) {
      this.setState({ ideas: nextProps.board.ideas });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.board.ideas && prevProps.board.ideas.length < this.props.board.ideas.length) {
      if (this.card) {
        this.card.focus();
      }
    }
  }

  handleAdd() {
    this.props.getNewIdea();
  }

  handleSortChange(e) {
    const selectedSortBy = e.target.value;
    const sortedIdeas = sortIdeas(this.state.ideas, selectedSortBy);

    this.setState({ ideas: sortedIdeas, sortBy: selectedSortBy });
  }

  showNotification(type) { // source https://github.com/igorprado/react-notification-system
    this.notificationSystem.addNotification({
      autoDismiss: 2,
      title: 'Changes saved',
      message: `Your changes to the "${type}" were saved`,
      level: 'success',
    });
  }

  render() {
    let ideas = [];
    if (this.state.ideas) {
      ideas = this.state.ideas;
    }
    return (<div className="container">
      <button className="js-add-button" onClick={this.handleAdd}>
        Add
      </button>
      <br />
      <label htmlFor="sort-by">
        Sort by:
        <select id="sort-by" value={this.state.sortBy} onChange={this.handleSortChange}>
          <option value="title">Title</option>
          <option value="createdDate">Create date</option>
        </select>
      </label>
      <NotificationSystem ref={(ns) => {
        this.notificationSystem = ns;
      }}
      />
      <div className="cards">
        {
          ideas.map(idea =>
            (<CardContainer
              key={idea.id}
              {...idea}
              onEdit={this.showNotification}
              ref={(instance) => {
                if (instance) { // guard after inline update
                  this.card = instance.getWrappedInstance(); // use getWrappedInstance() since its redux connected
                }
              }}
            />),
          )
        }
      </div>
    </div>);
  }
}

Board.propTypes = {
  board: PropTypes.object,
  getIdeasData: PropTypes.func.isRequired,
  getNewIdea: PropTypes.func.isRequired,
};

export default Board;
