import React from "react";

import LoginForm from "../../containers/forms/LoginForm";
import Auth from "../../containers/Auth";

const Login = () => {
    return <Auth path='/login'>
        <LoginForm />
    </Auth>
};

export default Login;
