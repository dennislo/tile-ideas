import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import reducers from '../../client/src/reducers/index';
// import { IDEA_ADD } from '../../client/src/actions/types';
import App from '../../client/src/app';

const router = express.Router();

router.get('/', (req, res) => {
  // http://redux.js.org/docs/recipes/ServerRendering.html
  const store = createStore(reducers);

  // Can inject initial state on server side
  // store.dispatch({
  //   type: IDEA_ADD,
  //   payload: {
  //     id: '1',
  //     createdDate: '',
  //     title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
  //   },
  // });

  const context = {};

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>,
  );

  const finalState = store.getState();

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.status(200).render('../views/index.ejs', {
      html,
      script: JSON.stringify(finalState),
    });
  }
});


export default router;
