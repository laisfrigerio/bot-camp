import { AUTH_ACTION } from '../actions/types';

export const isAuthenticated = () => ({
  type: AUTH_ACTION.IS_AUTHENTICATED,
});

export const login = data => ({
  type: AUTH_ACTION.LOGIN_REQUEST,
  data
});

export const logout = data => ({
  type: AUTH_ACTION.LOGOUT_ACTION,
  data
});
