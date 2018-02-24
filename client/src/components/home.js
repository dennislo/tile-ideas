import React from 'react';
import trashCan from '../../res/images/trash-icon.svg';

const Home = () => (
  <div className="container">
    <button>
      Add
    </button>
    <div className="cards">

      <div className="card">
        <span className="card-header">
          <span className="card-title">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </span>
        </span>
        <span className="card-summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <span className="card-character-count">&lt; 15 characters remaining</span>
        </span>
        <span className="card-meta">
          <span className="card-control">
            <img src={trashCan} className="trash-icon" alt="trash can" /><span className="trash-text"> Delete</span>
          </span>
        </span>
      </div>

      <div className="card">
        <span className="card-header">
          <span className="card-title">
            <h3></h3>
          </span>
        </span>
        <span className="card-summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <span className="card-character-count">&lt; 15 characters remaining</span>
        </span>
        <span className="card-meta">
          <span className="card-control">
            <img src={trashCan} className="trash-icon" alt="trash can" /><span className="trash-text"> Delete</span>
          </span>
        </span>
      </div>

      <div className="card">
        <span className="card-header">
          <span className="card-title">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </span>
        </span>
        <span className="card-summary">
        </span>
        <span className="card-meta">
          <span className="card-control">
            <img src={trashCan} className="trash-icon" alt="trash can" /><span className="trash-text"> Delete</span>
          </span>
        </span>
      </div>

      <div className="card">
        <span className="card-header">
          <span className="card-title">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </span>
        </span>
        <span className="card-summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
        <span className="card-meta">
          <span className="card-control">
            <img src={trashCan} className="trash-icon" alt="trash can" /><span className="trash-text"> Delete</span>
          </span>
        </span>
      </div>

    </div>
  </div>
);

export default Home;
