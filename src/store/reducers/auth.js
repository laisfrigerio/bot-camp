import { AUTH_ACTION } from '../actions/types';
import { post } from '../api';

const auth = (state, action) => {
  switch (action.type) {
    case AUTH_ACTION.IS_AUTHENTICATED:
      return isAuthenticated(state);
    case AUTH_ACTION.LOGIN_REQUEST:
      return login(state, action);
    case AUTH_ACTION.LOGOUT_ACTION:
    default:
      return {...state, isLoggedIn: false};
  }
};

const isAuthenticated =  (state = false, action) => {
  console.log("isAuthenticated");
  console.log(localStorage.getItem('token'));
  console.log(!!localStorage.getItem('token'));
  return {...state, isLoggedIn: !!localStorage.getItem('token')};
};

const login = async (state = {}, action) => {
  await post("http://localhost:8000/api/login", action.data)
    .then((response) => {
      localStorage.setItem("token", response.data.access_token);
      console.log("after login");
      return {...state, isLoggedIn: true, user: response.data.user, access_token: response.data.access_token};
    })
    .catch((error) => {
      console.log("error");
      console.log(error);
      return {...state, isLoggedIn: false};
    });

};

export default auth;
