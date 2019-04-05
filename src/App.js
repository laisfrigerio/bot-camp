import React, { Component, Fragment } from 'react';
import BtnBotcamp from './components/BtnBotcamp/index';
import LogoBotcamp from './components/LogoBotcamp/index';
import './styles/reset.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <LogoBotcamp/>
                <BtnBotcamp/>
            </Fragment>
        );
    }
}

export default App;
