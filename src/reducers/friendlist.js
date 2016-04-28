import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import createFragment from 'react-addons-create-fragment';

const initialState = {
  friends: [0, 1, 2],
    friendsById:{
      1:{
        name: 'Monday',
            location: 'London'
      },
      2:{
        name: 'Sunday',
            location: 'NY'
      },
      3: {
        name: 'Friday',
            location: 'LA'
      }
    }
};


export default function friends(state = initialState, action) {
      return initialState;

}
/*export default function friends(state = initialState, action) {
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
            charges: action.charges
          }
        },
      }
    case types.DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(id => id !== action.id),
        friendsById: omit(state.friendsById, action.id)
      }

    default:
      return initialState;
  }
}*/
