import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';



export default class FriendListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.boolean,
    starFriend: PropTypes.func.isRequired,
    onTrashClick: PropTypes.func.isRequired
  }

  render () {
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{this.props.name}</span></div>
          <div><span>{this.props.location}</span></div>
          <div>{this.props.charge}</div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}
