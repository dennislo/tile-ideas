import React from 'react';
import PropTypes from 'prop-types';
import trashCan from '../../res/images/trash-icon.svg';

const Card = ({ id, createdDate, title, body }) => {
  const nearLimit = false;
  return (<div id={id} className="card">
    <span className="card-header">
      <span className="card-title">
        <h3>{title}</h3>
      </span>
    </span>
    <span className="card-summary">
      {body}
      { nearLimit && <span className="card-character-count">&lt; 15 characters remaining</span> }
    </span>
    <span className="card-meta" data-created-date={createdDate}>
      <span className="card-control">
        <img src={trashCan} className="trash-icon" alt="trash can" /><span className="trash-text"> Delete</span>
      </span>
    </span>
  </div>);
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Card;
