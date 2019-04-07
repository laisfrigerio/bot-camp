import React from "react";

import LoginWrapper from "../../components/LoginWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import BtnBotcamp  from "../../components/BtnBotcamp";

const Login = () => {
    return (
        <LoginWrapper>
            <LogoBotcamp/>
            <BtnBotcamp content='Login' />
        </LoginWrapper>
    );
};

export default Login;