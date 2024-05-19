// "src/userActions.js"

import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './userSlice';
import axios from 'axios';

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      dispatch(fetchUserSuccess(response.data));
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};
