import * as types from '../constants/ActionTypes';

export function addFriend(name,location,charges) {
  return {
    type: types.ADD_FRIEND,
    name,
    location,
    charges
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function addCharge(charge) {
  return {
    type: types.ADD_CHARGE,
    charge
  };
}
