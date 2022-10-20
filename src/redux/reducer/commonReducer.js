import {UPDATE_USER_NAME} from '../actionTypes';

const initialState = {
  name: '',
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
export default CommonReducer;
