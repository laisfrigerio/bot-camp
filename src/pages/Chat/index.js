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
import ChatMessageUser from "../../components/ChatMessageUser";
import Image from "../../components/ImageBotcamp";
import ChatMessageRobot from "../../components/ChatMessageRobot";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      component: <ChatMessageUser>!cpf</ChatMessageUser>
    },
    {
      component: <ChatMessageRobot content="099.733.969-10" />
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    handleChange(event);
    if (event.key === 'Enter') {
      setMessages(old => [...old, {component: <ChatMessageUser>{currentMessage}</ChatMessageUser>}]);
      setCurrentMessage("");
    }
  };

  const uploadFiles = (event) => {
    event.persist();
    const file = event.target.files[0];
    if (file.type.includes("image/")) {
      setMessages(old => [...old, {component: <Image className="chat-image" src={URL.createObjectURL(file)} />}]);
    } else if (file.type.includes("audio/")) {
      setMessages(old => [...old, {component: (<audio class="chat-audio" controls><source src={URL.createObjectURL(file)} type={file.type} /></audio>)}]);
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
