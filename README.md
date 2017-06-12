This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) to allow a **zero configuration**  setup of a React application. 

* Assumes no login required, a default user is always logged in and each action and creation of topic is associated with that default user. *
* Assumes no user is associated with any upvotes or topics and each topic exists as itself*

# reddit-clone-react
This is a static application that has an application state maintained by Redux-React with no data persistence. All data is reset on the loading of the page.  This application is also hosted at [Heroku.](https://reddit-clone-react.herokuapp.com)
### Components
3 components inclusive of 1 container are created for rendering the React application.
  - `App.js`
  - `Topic.js`
  - `TopicList.js` <container>
### Actions
A single action file is created for handling the 3 different actions (*upvote, downvote, create new topic)*
 - `index.js` for handling Redux Actions
### Reducers
A single reducer file is created to handle all the actions received and maintain a single application state
- `index.js` for combining reducers
- `reducer_topics.js` as the root reducer for topics

# Testing with Jest
  - Minimal testing files were wrote to make sure basic app availability
 The test file can be run by the following command:
 ```sh
npm test
 ```

### Tech

reddit-clone-react uses a number of open source projects for development:

* [Susy](http://susy.oddbird.net/) - Susy - Your markup, your design, your opinions | our math.


### Installation

reddit-clone-react requires [Node.js](https://nodejs.org/) v5+ to run.

Install the dependencies and devDependencies and start the server with either yarn or npm

```sh
$ cd reddit-clone-react
$ npm install
$ npm start
```


# Todos
- Write more comprehensive test scripts & cases
