import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RIEInput, RIETextArea } from 'riek';

const trashCan = (process.env.NODE_ENV !== 'test') ? require('../../res/images/trash-icon.svg') : {};

export const maxChars = 140;
export const limitChars = 15;
export const isNearLimit = (bodyText) => {
  let result = {};
  let charsRemaining = (maxChars - bodyText.length);
  if (charsRemaining > limitChars) {
    result = { nearLimit: false, charsRemaining, charsCount: bodyText.length };
  }
  if (charsRemaining < limitChars) {
    if (charsRemaining < 0) {
      charsRemaining = 0;
    }
    result = { nearLimit: true, charsRemaining, charsCount: bodyText.length };
  }
  return result;
};

class Card extends Component {
  constructor(props) {
    super(props);
    const { id, createdDate } = props;
    this.state = {
      id,
      createdDate,
      inlineTitle: 'Click to edit title',
      inlineBody: 'Click to edit body',
      editing: false,
    };

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

    this.props.onEdit('Title'); // show notification
  }

  handleBodyChange(newState) {
    this.setState(newState);

    const idea = this.state;
    idea.inlineBody = newState.inlineBody;

    this.props.updateIdea(idea);

    this.props.onEdit('Body'); // show notification
  }

  handleDelete() {
    const idea = this.state;

    this.props.deleteIdea(idea);
  }

  render() {
    const { id, createdDate } = this.props;
    const { nearLimit, charsRemaining, charsCount } = isNearLimit(this.state.inlineBody);

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
        <RIETextArea
          value={this.state.inlineBody}
          change={this.handleBodyChange}
          propName="inlineBody"
        />
        {
          nearLimit && <span className="card-character-count">{charsCount} character(s) typed, {charsRemaining} remaining</span>
        }
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
  onEdit: PropTypes.func,
};

export default Card;
