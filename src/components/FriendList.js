import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import createFragment from 'react-addons-create-fragment';

export default class FriendList extends Component {
  static propTypes = {
    friends: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
      <ul className={styles.friendList}>
        {
          mapValues(createFragment(this.props.friends), (friend) => {
            return (<FriendListItem
                name={friend.name.toString()}
                location={friend.location}
                {...this.props.actions} />);
          })

        }
      </ul>
    );
  }

}
