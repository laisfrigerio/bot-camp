import React, { Component } from 'react';
import BtnBotcamp from './components/BtnBotcamp/index';
import LogoBotcamp from './components/LogoBotcamp/index';
import './reset.css';

class App extends Component {
    render() {
        return (
            <div>
                <LogoBotcamp/>
                <BtnBotcamp/>
            </div>
        );
    }
}

export default App;
