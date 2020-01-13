import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Echo from 'laravel-echo';
import SocketIoClient from 'socket.io-client';

import AudioMessage from "../../components/AudioMessage";
import ChatAttachmentIcon from "../../components/ChatAttachmentIcon";
import ChatContentWrapper from "../../wrapper/ChatContentWrapper";
import ChatFooterWrapper from '../../wrapper/ChatFooterWrapper';
import ChatHeaderWrapper from '../../wrapper/ChatHeaderWrapper';
import ChatInput from '../../components/ChatInput';
import ChatMessageUser from "../../components/ChatMessageUser";
import ChatMessageRobot from "../../components/ChatMessageRobot";
import ChatMicrophoneIcon from "../../components/ChatMicrophoneIcon";
import ChatWrapper from '../../wrapper/ChatWrapper';
import Image from "../../components/ImageBotcamp";
import LogoBotcamp   from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';
import Auth from '../../containers/Auth';

const Chat = (props) => {
  const EchoVar = new Echo({
    broadcaster: 'socket-io',
    host: window.location.hostname + ':6001'
  });

  console.log("EchoVar");
  console.log(EchoVar);

  EchoVar
    .channel('message-received')
    .listen('SendMessage', () => {
      console.log("a outra página foi carregada");
    });

  const [messages, setMessages] = useState([
    {component: <ChatMessageUser>!cpf</ChatMessageUser>},
    {component: <ChatMessageRobot content="099.733.969-10" />}
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [audioRecorder, setAudioRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const handleChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    handleChange(event);
    if (event.key === 'Enter' && currentMessage !== "") {
      setMessages(old => [...old, {component: <ChatMessageUser>{currentMessage}</ChatMessageUser>}]);
      setCurrentMessage("");
    }
  };

  const handleUploadFiles = (event) => {
    event.persist();
    const file = event.target.files[0];

    if (file) {
      if (file.type.includes("image/")) {
        setMessages(old => [...old, {component: <Image className="chat-image" src={URL.createObjectURL(file)} />}]);
      } else if (file.type.includes("audio/")) {
        setMessages(old => [...old, {component: <AudioMessage file={file} />}]);
      }
    }
  };

  const handleRecordAudio = () => {
    let mediaRecorder =  null;

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorder = new MediaRecorder(stream);
        setAudioRecorder(mediaRecorder);

        let audioFrames = [];
        mediaRecorder.ondataavailable = data => audioFrames.push(data.data);

        mediaRecorder.onstop = () => {
          const blob = new Blob(audioFrames, {type: 'audio/mp3'});
          setMessages(old => [...old, {component: <AudioMessage file={blob} />}]);
        };

        mediaRecorder.start();
        setIsRecording(true);
      });
  };

  const handleStoreRecord = () => {
    audioRecorder.stop();
    setIsRecording(false);
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <Auth path={props.location.pathname}>
      <ChatWrapper>
        <ChatHeaderWrapper>
          <LogoBotcamp width='200px'/>
          <Link to='/'>
            <LogoutBotcamp />
          </Link>
        </ChatHeaderWrapper>
        <ChatContentWrapper messages={messages} messagesEndRef={messagesEndRef} />
        <ChatFooterWrapper>
          <ChatInput
            name='message'
            id='message-1'
            placeholder='Diz aí'
            type='text'
            value={currentMessage}
            onChange={handleChange}
            onKeyDown={handleSubmit} />
          <ChatAttachmentIcon onChange={handleUploadFiles}/>
          <ChatMicrophoneIcon width='30px' height='30px' onMouseDown={handleRecordAudio} onMouseUp={handleStoreRecord} isRecording={isRecording}/>
        </ChatFooterWrapper>
      </ChatWrapper>
    </Auth>
  );
};

export default Chat;
