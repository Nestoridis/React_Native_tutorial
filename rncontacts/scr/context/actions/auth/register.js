import axiosInstance from '../../../helpers/axiosInstance';
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_AUTH_STATE,
} from './../../../constants/actionTypes/index';

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch =>
  onSuccess => {
    dispatch({type: REGISTER_LOADING});
    axiosInstance
      .post('/auth/register', {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      .then(res => {
        dispatch({type: REGISTER_SUCCESS, payload: res.data});
        onSuccess(res.data);
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err
            ? err.response.data
            : {error: 'Something went wrong, try again'},
        });
      });
  };
