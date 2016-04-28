import React, { Component, PropTypes, dispatch } from 'react';
import styles from './FriendListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FriendsActions from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';
import createFragment from 'react-addons-create-fragment';

/*@connect(state => ({
    friendlist: state.friendlist
}))*/
const initialState = {
    friends: [0, 1, 2],
    friendsById:{
        fr1:{
            name: 'Monday',
            location: 'London'
        },
        fr2:{
            name: 'Sunday',
            location: 'NY'
        },
        fr3: {
            name: 'Friday',
            location: 'LA'
        }
    }
};


export default class FriendListApp extends Component {
  /*static propTypes = {
    friendsById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }*/

  render () {
    /*const { friendlist: { friendsById }, dispatch } = this.props;*/
      const actions = bindActionCreators(FriendsActions, dispatch);
    return (
      <div className={styles.friendListApp}>
        <h1>Ivan Ivanov</h1>
          <AddFriendInput addFriend={actions.addFriend} />
          <FriendList friends={initialState.friendsById} actions={actions} />
      </div>
    );
  }
}
