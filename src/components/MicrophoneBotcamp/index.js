import React from 'react';
import styled from 'styled-components';

import Image from "../ImageBotcamp";
import logo from "../../img/microphone.svg";

const MicrophoneIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    bottom: 5px;
    background-color: #ee3e25;
    border-radius: 30px;
    padding: 1px;
    height: 40px;
    width: 40px;
    box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.25);
`;

const MicrophoneBotcamp = ({width, height = 'auto'}) => (
    <MicrophoneIcon>
        <Image
            src={logo}
            alt='microphone icon'
            width={width}
            height={height}
        />
    </MicrophoneIcon>
);

export default MicrophoneBotcamp;
