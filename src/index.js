import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import NewDay from './components/NewDay';
import FriendListApp from './containers/FriendListApp';
import ReactDOM from 'react-dom';
import { routes } from './routes'
import { combineReducers } from 'redux';
import { createStore, renderDevTools } from './store_enhancers/devTools';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);


/*ReactDOM.render(<App />, document.getElementById('root'));*/

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
)

