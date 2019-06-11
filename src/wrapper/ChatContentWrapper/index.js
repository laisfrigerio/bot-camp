import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100vw;
    height: calc(100vh - 150px);
    margin-top: 25px;
    overflow: auto;
    
    .chat-image {
        width: 500px;
        height: auto;
        box-sizing: border-box;
        position: relative;
        background-color: rgba(238,62,37,0.83);
        border-radius: 10px 0 10px 10px;
        color: #fff;
        font-size: 16px;
        font-family: Roboto,'Open Sans',sans-serif;
        margin: 0 16px 20px auto;
        padding: 10px 15px 10px 15px;
    }
`;

const ChatContentWrapper = ({messages, messagesEndRef}) => {
  return (
   <Wrapper>
     {messages.map((message, index) => {
         return <React.Fragment key={index}>{message.component}</React.Fragment>
     })}
     <div ref={messagesEndRef} />
   </Wrapper>
  );
};

export default ChatContentWrapper ;
