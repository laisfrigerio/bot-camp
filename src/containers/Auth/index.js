import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../../store/actions/auth";

const Auth = (props) =>{
  const dispatch = useDispatch();
  dispatch(isAuthenticated());
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn && props.path === '/login') {
    return <Redirect to='/chat' />;
  }

  if (isLoggedIn || (!isLoggedIn && props.path === '/login')) {
    return <div>{props.children}</div>
  }

  return <Redirect to='/' />;
};

export default Auth;
