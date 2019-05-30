import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ChatWrapper from '../../components/ChatWrapper';
import ChatHeaderWrapper from '../../components/ChatHeaderWrapper';
import ChatFooterWrapper from '../../components/ChatFooterWrapper';
import LogoBotcamp   from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';
import ChatInput from '../../components/ChatInput';
import ChatContentWrapper from "../../components/ChatContentWrapper";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      content: '!cpf',
      type: 'user'
    },
    {
      content: '099.733.969-10',
      type: 'robot'
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    handleChange(event);
    if (event.key === 'Enter') {
      setMessages(old => [...old, {type: 'user', content: currentMessage}]);
      setCurrentMessage("");
    }
  };

  return (
    <ChatWrapper>
      <ChatHeaderWrapper>
        <LogoBotcamp width='200px'/>
        <Link to='/'>
          <LogoutBotcamp />
        </Link>
      </ChatHeaderWrapper>
      <ChatContentWrapper messages={messages}>
      </ChatContentWrapper>
      <ChatFooterWrapper>
        <ChatInput
          name='message'
          id='message-1'
          placeholder='Diz aí'
          type='text'
          value={currentMessage}
          onChange={handleChange}
          onKeyDown={handleSubmit} />
        {/*<ChatAttachmentIcon/>*/}
        {/*<ChatMicrophoneIcon width='30px' height='30px'/>*/}
      </ChatFooterWrapper>
    </ChatWrapper>
  );
};

export default Chat;
