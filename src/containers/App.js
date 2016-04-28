import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, renderDevTools } from '../store_enhancers/devTools';
import NewDay from '../components/NewDay';
import AddFriendInput from '../components/AddFriendInput';
import FriendList from '../components/FriendList';
import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
          <Provider store={store}>
              <FriendListApp />
          </Provider>
        {renderDevTools(store)}
      </div>
    );
  }
}

