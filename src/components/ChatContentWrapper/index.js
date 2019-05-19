import React from "react";
import styled from "styled-components";
import ChatMessageUser from "../ChatMessageUser";
import ChatMessageRobot from "../ChatMessageRobot";

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
         return <ChatMessageUser key={index}>{message.message}</ChatMessageUser>
       } else {
         return <ChatMessageRobot key={index}/>
       }
     })}
   </Wrapper>
  );
};

export default ChatContentWrapper ;
