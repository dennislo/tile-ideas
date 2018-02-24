import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RIEInput } from 'riek';
import trashCan from '../../res/images/trash-icon.svg';

class Card extends Component {
  constructor(props) {
    super(props);
    const { id, createdDate } = props;
    this.state = { id, createdDate, inlineTitle: 'Click to edit title', inlineBody: 'Click to edit body' };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleTitleChange(newState) {
    this.setState(newState);
    // TODO dispatch update title
  }

  handleBodyChange(newState) {
    this.setState(newState);
    // TODO dispatch update body
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
        <span className="card-control">
          <img src={trashCan} className="trash-icon" alt="trash can" /><span className="trash-text"> Delete</span>
        </span>
      </span>
    </div>);
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Card;
