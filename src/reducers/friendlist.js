import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  friends: [1, 2, 3],
  friendsById: {
    1: {
      id: 1,
      name: 'Monday',
      location: 'London',
      charges: {
        1:{charge: 'Taxi', cost: 20, currency: 'USD'},
        2:{charge: 'Visa', cost: 40, currency: 'USD'}
      }
    },
    2: {
      id: 2,
      name: 'Sunday',
      location: 'NY',
      charges: {
        1:{charge: 'BRFST', cost: 20, currency: 'USD'},
        2:{charge: 'Taxi', cost: 40, currency: 'USD'},
        3:{charge: 'Dinner', cost: 35, currency: 'USD'},
        4:{charge: 'Flat', cost: 150, currency: 'USD'}
      }
    },
    3: {
      id: 3,
      name: 'Friday',
      location: 'LA',
      charges: {
        1:{charge: 'Dinner', cost: 80, currency: 'USD'},
        2:{charge: 'Flat', cost: 100, currency: 'USD'}
      }
    }
  }
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      const newId = state.friends[state.friends.length-1] + 1;
      return {
        ...state,
        friends: state.friends.concat(newId),
        friendsById: {
          ...state.friendsById,
          [newId]: {
            id: newId,
            name: action.name,
            location: action.location,
            changes: action.location
          }
        },
      }
    case types.DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(id => id !== action.id),
        friendsById: omit(state.friendsById, action.id)
      }

    case types.STAR_FRIEND:
      return {
        ...state,
        friendsById: mapValues(state.friendsById, (friend) => {
          return friend.id === action.id ?
            assign({}, friend, { starred: !friend.starred }) :
            friend
        })
      }

    default:
      return state;
  }
}
