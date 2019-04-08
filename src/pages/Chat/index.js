import React, { Fragment } from 'react';

import HeaderWrapper from '../../components/HeaderWrapper';
import LogoBotcamp   from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';
import InputBotcamp from '../../components/InputBotcamp';

const Chat = () => {
    return (
        <Fragment>
            <HeaderWrapper>
                <LogoBotcamp width='200px'/>
                <LogoutBotcamp />
            </HeaderWrapper>
            <InputBotcamp name='message' id='message' placeholder='Diz aí' />
        </Fragment>
    );
};

export default Chat;
