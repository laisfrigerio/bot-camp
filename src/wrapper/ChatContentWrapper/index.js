import React from "react";
import styled from "styled-components";
import ChatMessageUser from "../../components/ChatMessageUser/index";
import ChatMessageRobot from "../../components/ChatMessageRobot/index";
import Image from "../../components/ImageBotcamp";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100vw;
    height: calc(100vh - 150px);
    margin-top: 25px;
    overflow: auto;
`;

const ChatContentWrapper = ({messages}) => {
  return (
   <Wrapper>
     {messages.map((message, index) => {
       if (message.type === 'user') {
         if (message.contentType === "text") return <ChatMessageUser key={index}>{message.content}</ChatMessageUser>
       }

       return <ChatMessageRobot key={index} content={message.content}/>
     })}
   </Wrapper>
  );
};

export default ChatContentWrapper ;
