import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import LoginWrapper from "../../wrapper/LoginWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import BtnBotcamp  from "../../components/BtnBotcamp";
import ColumnWrapper from "../../wrapper/ColumnWrapper";
import Label from "../../components/Forms/Label";
import Input from "../../components/Forms/Input";

import { login } from "../../store/actions/auth";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10px;
  max-width: 320px;
  width: 100vw;
`;

const LoginForm = () => {
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);

  //- States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  //- Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);
    dispatch(await login({email, password}));
    //- laaisfrigerio@gmail.com
  };

  if (auth.isLoggedIn) {
    return <Redirect to='/chat' />;
  }

  return (
    <LoginWrapper>
      <LogoBotcamp width='248px'/>
      <Form onSubmit={handleSubmit}>
        <div>
          <ColumnWrapper>
            <Label id="email" name="email" label="E-mail"/>
            <Input
              id="email"
              name="email"
              placeholder="E-mail"
              value={email}
              type="email"
              onChange={(event) => setEmail(event.target.value)} />
          </ColumnWrapper>
          <ColumnWrapper>
            <Label id="password" name="password" label="Senha"/>
            <Input
              id="password"
              name="password"
              placeholder="Senha"
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}/>
          </ColumnWrapper>
        </div>
        <BtnBotcamp label='Login' type='submit' isDisabled={disabled} />
      </Form>
    </LoginWrapper>
  );
};

export default LoginForm;
