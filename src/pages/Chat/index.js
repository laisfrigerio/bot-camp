import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ChatWrapper from '../../wrapper/ChatWrapper';
import ChatHeaderWrapper from '../../wrapper/ChatHeaderWrapper';
import ChatFooterWrapper from '../../wrapper/ChatFooterWrapper';
import LogoBotcamp   from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';
import ChatInput from '../../components/ChatInput';
import ChatContentWrapper from "../../wrapper/ChatContentWrapper";
import ChatAttachmentIcon from "../../components/ChatAttachmentIcon";
import ChatMicrophoneIcon from "../../components/ChatMicrophoneIcon";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      content: '!cpf',
      contentType: 'text',
      type: 'user'
    },
    {
      content: '099.733.969-10',
      contentType: 'text',
      type: 'robot'
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [file, setFile] = useState([]);

  const handleChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    handleChange(event);
    if (event.key === 'Enter') {
      setMessages(old => [...old, {type: 'user', contentType: "text", content: currentMessage}]);
      setCurrentMessage("");
    }
  };

  const uploadFiles = (event) => {
    setFile(event.target.files);
    setMessages(old => [...old, {type: 'user', contentType: "file", content: ""}]);
    setCurrentMessage("");
    console.log("file");
    console.log(event.target.files);
  };

  return (
    <ChatWrapper>
      <ChatHeaderWrapper>
        <LogoBotcamp width='200px'/>
        <Link to='/'>
          <LogoutBotcamp />
        </Link>
      </ChatHeaderWrapper>
      <ChatContentWrapper messages={messages} />
      <ChatFooterWrapper>
        <ChatInput
          name='message'
          id='message-1'
          placeholder='Diz aí'
          type='text'
          value={currentMessage}
          onChange={handleChange}
          onKeyDown={handleSubmit} />
        <ChatAttachmentIcon onChange={uploadFiles}/>
        <ChatMicrophoneIcon width='30px' height='30px'/>
      </ChatFooterWrapper>
    </ChatWrapper>
  );
};

export default Chat;
