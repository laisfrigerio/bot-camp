import React from "react";

import LoginWrapper from "../../components/LoginWrapper/index";
import LogoBotcamp from "../../components/LogoBotcamp/index";
import BtnBotcamp  from "../../components/BtnBotcamp/index";

const Login = () => {
    return (
        <LoginWrapper>
            <LogoBotcamp width='248px'/>
            <BtnBotcamp content='Login' />
        </LoginWrapper>
    );
};

export default Login;