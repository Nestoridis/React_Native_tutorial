import axiosInstance from '../../../helpers/axiosInterceptor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './../../../constants/actionTypes/index';

export default ({password, userName: username}) =>
  dispatch => {
    dispatch({type: LOGIN_START});
    axiosInstance
      .post('/auth/login', {
        password,
        username,
      })
      .then(res => {
        console.log('resdata :>>', res.data);
        AsyncStorage.setItem('@token', res.data.token);
        //console.log('token :>>', res.data.token);
        AsyncStorage.setItem('@user', JSON.stringify(res.data.user));
        //console.log('user:>>', JSON.stringify(res.data.user));
        dispatch({type: LOGIN_SUCCESS, payload: res.data});
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try again'},
        });
        console.log(err.response.data);
      });
  };
