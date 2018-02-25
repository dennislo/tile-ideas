# Tile Ideas

Idea/memo board where you can create, update, delete ideas.

<details>
<summary><strong>Table of Contents</strong> (click to expand)</summary>

* [Installation](#installation)
* [Testing](#testing)
* [Developing](#developing)
* [Improvements](#improvements)
</details>

Dependencies:
- [ReactJS] - The state based framework for your Views
- [React Router v4] - For routing to different paths
- [Redux] - Redux manages your state
- [Babel] - The compiler to compile your JS files with es6, es7, JSX syntax to regular javascript
- [Webpack] - The module binder which takes all your JS files from different directories and compiles them into a single app.bundle.js (you can change the filename of course) so you can include it in a HTML page
- [ExpressJS] - The node framework to serve your views to the world when they hit the server at example.com or example.com/awesome.html

Testing:
- [Mocha] - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser
- [Enzyme] - Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components
- [Sinon] - Standalone test spies, stubs and mocks for JavaScript. Works with any unit testing framework

## Installation

First `cd` into the directory and run

    npm install

## Testing

### Unit tests
First `cd` into the directory and run

    npm test

## Developing
To develop your own react application, you can take advantage of [Hot Reload] and Webpack Dev Server. To develop app with hot reload:

    npm run dev

Now you can access your react application on http://localhost:8080

### Production build and Deploy
To make a production build of your project, run the following commands

    npm run build
  
This will create create two files: `index.js` in `server/public/js` and `server.js` in `server/bin`.

`server.js` will be used for serving the application on port 3000 and `index.js` is the actual react app itself.

Finally run

    npm start

The you will be able to access this app from http://localhost:3000.

To get a distributable tarball of your application, run this command

    npm pack

Remember that you have to run `npm run build` before doing this. This will create a tar.gz file in your root folder. The contents in this file is deployable. All you need to do is copy the contents inside package folder inside this tar.gz file to your server.

## Improvements

Below is a short list of various improvements broken up into features, implementation and development categories.

### Implementation:
* Add graph ql to integrate with backend
* Add integration tests with backend
* Add service worker for improved offline experience
* Add [Reselect] for memoise redux app store

### Development:
* Add jest.js for component snapshot testing
* Add backstop.js (or whatever) for visual regression testing
* Add storybook.js for improved component development and testing
* Add istanbul.js for test code coverage

### Features:
* Add seo for users and crawlers
* Add accessibility for screen reader support
* Add cdn scripts for popular dependencies
* Add styled add and sort by controls for better ui/ux
* Add viewable create date field for better ux

[ReactJS]: <https://facebook.github.io/react/>
[Babel]: <https://babeljs.io/>
[Webpack]: <https://webpack.github.io/>
[React Router v4]: <https://reacttraining.com/react-router/>
[Hot Reload]: <https://stackoverflow.com/questions/41428954>
[ExpressJS]: <http://expressjs.com/>
[Redux]: <http://redux.js.org/>
[article]: <https://medium.com/@tahnik.mstsn/reactjs-expressjs-with-hot-reloading-and-server-side-rendering-901a01ea2711>
[Mocha]: <https://mochajs.org/>
[Enzyme]: <http://airbnb.io/enzyme/>
[Sinon]: <http://sinonjs.org/>
[Reselect]: <https://github.com/reactjs/reselect>