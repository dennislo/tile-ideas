import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RIEInput } from 'riek';
import trashCan from '../../res/images/trash-icon.svg';

class Card extends Component {
  constructor(props) {
    super(props);
    const { id, createdDate } = props;
    this.state = { id, createdDate, inlineTitle: 'Click to edit title', inlineBody: 'Click to edit body', editing: false };

    this.focus = this.focus.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  focus() {
    this.setState({ editing: true });
  }

  handleTitleChange(newState) {
    this.setState(newState);

    const idea = this.state;
    idea.inlineTitle = newState.inlineTitle;

    this.props.updateIdea(idea);
  }

  handleBodyChange(newState) {
    this.setState(newState);

    const idea = this.state;
    idea.inlineBody = newState.inlineBody;

    this.props.updateIdea(idea);
  }

  handleDelete() {
    const idea = this.state;

    this.props.deleteIdea(idea);
  }

  render() {
    const { id, createdDate } = this.props;
    const nearLimit = false;

    return (<div id={id} className="card">
      <span className="card-header">
        <span className="card-title">
          <h3>
            <RIEInput
              value={this.state.inlineTitle}
              change={this.handleTitleChange}
              propName="inlineTitle"
              editing={this.state.editing}
            />
          </h3>
        </span>
      </span>
      <span className="card-summary">
        <RIEInput
          value={this.state.inlineBody}
          change={this.handleBodyChange}
          propName="inlineBody"
        />
        {nearLimit && <span className="card-character-count">&lt; 15 characters remaining</span>}
      </span>
      <span className="card-meta" data-created-date={createdDate}>
        <span className="card-control" onClick={this.handleDelete}>
          <img src={trashCan} className="trash-icon" alt="trash can" /><span className="trash-text"> Delete</span>
        </span>
      </span>
    </div>);
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  updateIdea: PropTypes.func.isRequired,
  deleteIdea: PropTypes.func.isRequired,
};

export default Card;
