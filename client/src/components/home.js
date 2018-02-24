import React from 'react';
import Card from './card';

const ideas = [
  {
    id: '1',
    createdDate: '24 Feb 2018',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '2',
    createdDate: '24 Feb 2018',
    title: '',
    body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '3',
    createdDate: '24 Feb 2018',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    body: '',
  },
  {
    id: '4',
    createdDate: '24 Feb 2018',
    title: '',
    body: '',
  },
];

const Home = () => (
  <div className="container">
    <button>
      Add
    </button>
    <div className="cards">
      {
        ideas.map(idea => <Card {...idea} />)
      }
    </div>
  </div>
);

export default Home;
