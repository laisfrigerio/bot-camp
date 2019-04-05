import React, { Component } from 'react';
import BtnBotcamp from './components/BtnBotcamp/index';
import LogoBotcamp from './components/LogoBotcamp/index';
import LoginWrapper from './components/LoginWrapper/index';
import './styles/reset.css';

class App extends Component {
    render() {
        return (
            <LoginWrapper>
                <LogoBotcamp/>
                <BtnBotcamp>Login</BtnBotcamp>
            </LoginWrapper>
        );
    }
}

export default App;
