import React from 'react';
import styled from 'styled-components';

import AvatarRobot from '../../components/ChatMessageRobot/AvatarRobot';
import MessageRobot from '../../components/ChatMessageRobot/MessageRobot';
import logo from "../../img/robot.png";
import Image from "../ImageBotcamp";

const Wrapper = styled.div`
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: row;
    position: relative;
    margin-left: 15px;
    width: 100%;
    height: auto;
    padding: 10px;
`;

const ChatMessageRobot = () => {
    return (
        <Wrapper>
            <AvatarRobot>
                <Image
                    src={logo}
                    alt='robot'
                    width='30px'
                    height='30px'
                />
            </AvatarRobot>
            <MessageRobot>099.77.969-10</MessageRobot>
        </Wrapper>
    );
};

export default ChatMessageRobot;
