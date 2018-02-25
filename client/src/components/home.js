import React from 'react';
import BoardContainer from '../containers/board-container';
import ErrorBoundary from '../components/error-boundary';

const Home = () => (
  <ErrorBoundary>
    <BoardContainer />
  </ErrorBoundary>
);

export default Home;
