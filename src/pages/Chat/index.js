import React from 'react';
import { Link } from 'react-router-dom';

import ChatWrapper from '../../components/ChatWrapper';
import ChatHeaderWrapper from '../../components/ChatHeaderWrapper';
import ChatFooterWrapper from '../../components/ChatFooterWrapper';
import LogoBotcamp   from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';
import ChatInput from '../../components/ChatInput';
import ChatContentWrapper from "../../components/ChatContentWrapper";
import ChatMessageUser from "../../components/ChatMessageUser";
import ChatMessageRobot from "../../components/ChatMessageRobot";

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
                <ChatMessageUser>!cpf</ChatMessageUser>
                <ChatMessageRobot />
            </ChatContentWrapper>
            <ChatFooterWrapper>
                <ChatInput name='message' id='message-1' placeholder='Diz aí' type='text' />
                {/*<ChatAttachmentIcon/>*/}
                {/*<ChatMicrophoneIcon width='30px' height='30px'/>*/}
            </ChatFooterWrapper>
        </ChatWrapper>
    );
};

export default Chat;
