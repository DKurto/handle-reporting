import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

export default class AddFriendInput extends Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <input
            type="text"
            autoFocus="true"
            className={classnames('form-control', styles.addFriendInput)}
            placeholder="Entet Day"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            />
        <input
            type="text"
            autoFocus="true"
            className={classnames('form-control', styles.addFriendInput)}
            placeholder="Entet City"
            value={this.state.location}
            onChange={this.handleChangeLocation.bind(this)}
        />
          <button onClick={() => this.props.addFriend(
            this.state.name,
            this.state.location,
            {
              1:{charge: 'Taxi99', cost: 20, currency: 'USD'},
              2:{charge: 'Visa', cost: 40, currency: 'USD'}
              })}>
          Add
        </button>
        </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }
  handleChangeLocation (e) {
    this.setState({ location: e.target.value });
  }

}
