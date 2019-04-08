import React from 'react';
import { Link } from 'react-router-dom';

import ChatWrapper from '../../components/ChatWrapper';
import HeaderWrapper from '../../components/HeaderWrapper';
import FooterWrapper from '../../components/FooterWrapper';
import LogoBotcamp   from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';
import InputBotcamp from '../../components/InputBotcamp';
import AttachmentBotcamp from '../../components/AttachmentBotcamp';
import MicrophoneBotcamp from '../../components/MicrophoneBotcamp';

const Chat = () => {
    return (
        <ChatWrapper>
            <HeaderWrapper>
                <LogoBotcamp width='200px'/>
                <Link to='/'>
                    <LogoutBotcamp />
                </Link>
            </HeaderWrapper>
            <FooterWrapper>
                <InputBotcamp name='message' id='message' placeholder='Diz aí' type='text' />
                <AttachmentBotcamp/>
                <MicrophoneBotcamp width='30px' height='30px'/>
            </FooterWrapper>
        </ChatWrapper>
    );
};

export default Chat;
