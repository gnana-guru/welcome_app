import {UPDATE_USER_NAME} from '../actionTypes';

export const updateUserName = data => ({
  type: UPDATE_USER_NAME,
  payload: data,
});
