import React from 'react';
import { Link } from 'react-router-dom';

import ChatWrapper from '../../components/ChatWrapper';
import ChatHeaderWrapper from '../../components/ChatHeaderWrapper';
import ChatFooterWrapper from '../../components/ChatFooterWrapper';
import LogoBotcamp   from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';
import ChatInput from '../../components/ChatInput';
import ChatAttachmentIcon from '../../components/ChatAttachmentIcon';
import ChatMicrophoneIcon from '../../components/ChatMicrophoneIcon';
import ChatContentWrapper from "../../components/ChatContentWrapper";
import ChatMessageUser from "../../components/ChatMessageUser";

const Chat = () => {
    return (
        <ChatWrapper>
            <ChatHeaderWrapper>
                <LogoBotcamp width='200px'/>
                <Link to='/'>
                    <LogoutBotcamp />
                </Link>
            </ChatHeaderWrapper>
            <ChatContentWrapper>
                <ChatMessageUser>CPF</ChatMessageUser>
            </ChatContentWrapper>
            <ChatFooterWrapper>
                <ChatInput name='message' id='message' placeholder='Diz aí' type='text' />
                {/*<ChatAttachmentIcon/>*/}
                {/*<ChatMicrophoneIcon width='30px' height='30px'/>*/}
            </ChatFooterWrapper>
        </ChatWrapper>
    );
};

export default Chat;
