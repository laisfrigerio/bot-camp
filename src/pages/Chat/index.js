import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ChatWrapper from '../../components/ChatWrapper';
import ChatHeaderWrapper from '../../components/ChatHeaderWrapper';
import ChatFooterWrapper from '../../components/ChatFooterWrapper';
import LogoBotcamp   from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';
import ChatInput from '../../components/ChatInput';
import ChatContentWrapper from "../../components/ChatContentWrapper";

class Chat extends Component {

  constructor () {
    super();
    this.state = {
      messages: [
        {
        message: '!cpf',
        type: 'user'
        },
        {
          message: '099.733.969-10',
          type: 'robot'
        }
      ],
      currentMessage: '',
      key: '',
    }
  }

  onChangeCurrentMessage = (event) => {
    this.setState({ currentMessage: event.target.value});
  };

  addMessage = (event) => {
    this.setState({ currentMessage: event.target.value, key: event.key}, () => {
      if (this.state.key === 'Enter') {
        let messages = this.state.messages;
        const message = {
          type: 'user',
          message: this.state.currentMessage
        };
        messages.push(message);
        this.setState({
          messages: messages,
          currentMessage: '',
          key: '',
        });

        console.log(this.state.messages);
      }
    });
  };

  render() {
    return (
      <ChatWrapper>
        <ChatHeaderWrapper>
          <LogoBotcamp width='200px'/>
          <Link to='/'>
            <LogoutBotcamp />
          </Link>
        </ChatHeaderWrapper>
        <ChatContentWrapper messages={this.state.messages}>
        </ChatContentWrapper>
        <ChatFooterWrapper>
          <ChatInput
            name='message'
            id='message-1'
            placeholder='Diz aí'
            type='text'
            value={this.state.currentMessage}
            onChange={this.onChangeCurrentMessage}
            onKeyDown={this.addMessage} />
          {/*<ChatAttachmentIcon/>*/}
          {/*<ChatMicrophoneIcon width='30px' height='30px'/>*/}
        </ChatFooterWrapper>
      </ChatWrapper>
    );
  }
};

export default Chat;
