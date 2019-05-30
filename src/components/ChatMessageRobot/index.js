import React from 'react';
import styled from 'styled-components';

import AvatarRobot from '../../components/ChatMessageRobot/AvatarRobot';
import MessageRobot from '../../components/ChatMessageRobot/MessageRobot';
import avatar from "../../img/robot.png";
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

const ChatMessageRobot = ({content}) => {
    return (
        <Wrapper>
            <AvatarRobot>
                <Image
                    src={avatar}
                    alt='robot'
                    width='30px'
                    height='30px'
                />
            </AvatarRobot>
            <MessageRobot>{content}</MessageRobot>
        </Wrapper>
    );
};

export default ChatMessageRobot;
