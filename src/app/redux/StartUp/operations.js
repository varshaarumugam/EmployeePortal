/* jshint ignore:start */

import startUpAction from './actions';
import data from '@config/data';

export function singUP () {
  return dispatch => {
    dispatch (startUpAction.fetchStartUpSignup (data.login));
  };
}

export function get_employee_list () {
  return dispatch => {
    console.log ('data from operation', data.login);
    dispatch (startUpAction.fetchgetemployeelist (data.DashBoard.user));
  };
}
