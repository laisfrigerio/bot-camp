import React from "react";
import styled from "styled-components";

import Image from "../ImageBotcamp";
import logout from "../../img/logout.svg";

const Logout = styled.button`
    background-color: transparent;
    cursor: pointer;
`;

const LogoutBotcamp = () => {
    return (
        <Logout>
            <Image
                src={logout}
                alt='icon-logout'
                width='30px'
                height='30px'
            />
        </Logout>
    );
};

export default LogoutBotcamp;