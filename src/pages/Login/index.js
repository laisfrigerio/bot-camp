import React from "react";

import LoginWrapper from "../../components/wrapper/LoginWrapper/index";
import LogoBotcamp from "../../components/LogoBotcamp/index";
import BtnBotcamp  from "../../components/BtnBotcamp/index";

const Login = () => {
    return (
        <LoginWrapper>
            <LogoBotcamp/>
            <BtnBotcamp content='Login' />
        </LoginWrapper>
    );
};

export default Login;