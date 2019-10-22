/* jshint ignore:start */
import StartUpType from './types';

// actions

const fetchStartUpSignup = payload => ({
  type: StartUpType.FETCH_STARTUP_SIGNUP,
  payload: payload,
});
const fetchgetemployeelist = payload => ({
  type: StartUpType.FETCH_GET_EMPLOYEELIST,
  payload: payload,
});

export default {
  fetchStartUpSignup,
  fetchgetemployeelist,
};
