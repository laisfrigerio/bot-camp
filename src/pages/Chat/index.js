import React from "react";

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";

const Chat = () => {
    return (
        <HeaderWrapper>
            <LogoBotcamp width='200px'/>
            <LogoutBotcamp />
        </HeaderWrapper>
    );
};

export default Chat;