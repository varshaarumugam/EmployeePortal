/* jshint ignore:start */

import StartUpType from './types';

const initialState = {
  loading: false,
  signup: {},
  employeelist: {},
};

// reducer
const StartUpReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case StartUpType.FETCH_STARTUP_SIGNUP:
      return {
        ...state,
        signup: action.payload,
        loading: false,
      };
    case StartUpType.FETCH_GET_EMPLOYEELIST:
      return {
        ...state,
        employeelist: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default StartUpReducer;
