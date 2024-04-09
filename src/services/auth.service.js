import axios from 'axios';
import conf from '../conf/conf.js';
import { login, logout } from '../reducers/user.reducer.js';

const loginAuth = async (userData, dispatch) => {
  try {
    const response = await axios.post(`${conf.appBackendBaseUrl}/users/login`, userData, {
      withCredentials: true
    });
    const { data } = response.data;
    const { user } = data;
    
    // Store user detail in redux store
    dispatch(login(user));

    return true
  } catch (error) {
    throw error;
  }
};

const logoutAuth = async (dispatch) => {
  try {
    await axios.post(`${conf.appBackendBaseUrl}/users/logout`, "1", {
      withCredentials: true,
    });
    
    // Remove user detail from redux store
    dispatch(logout());
  } catch (error) {
    throw error;
  }
};

const getUserOnLoad = async (dispatch) => {
  try{
    const response = await axios.get(`${conf.appBackendBaseUrl}/users/current-user`, {
      withCredentials: true
    });
    const { data } = response.data;
    const { user } = data;
    
    // Store user detail in redux store
    dispatch(login(user));

    return user;
  }catch(error){
    throw error;
  }
}

const authService = {
  loginAuth,
  logoutAuth,
  getUserOnLoad
};

export default authService;
