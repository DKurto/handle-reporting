import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App';
import NewDay from './components/NewDay';
import FriendListApp from './containers/FriendListApp';
import AddFriendInput from './components/AddFriendInput';
import FriendListItem from './components/FriendListItem';

export const routes = (
    <div>
        <Route path='/'>
            <IndexRoute component={App} />
            <Route path='new_day' component={NewDay} />
        </Route>
    </div>

)