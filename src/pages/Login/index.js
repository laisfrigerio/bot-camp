import React from "react";
import { Link } from 'react-router-dom';

import LoginWrapper from "../../components/LoginWrapper/index";
import LogoBotcamp from "../../components/LogoBotcamp/index";
import BtnBotcamp  from "../../components/BtnBotcamp/index";

const Login = () => {
    return (
        <LoginWrapper>
            <LogoBotcamp width='248px'/>
            <Link to='/chat'>
                <BtnBotcamp content='Login' />
            </Link>
        </LoginWrapper>
    );
};

export default Login;
