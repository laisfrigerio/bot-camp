import React from 'react';
import styled from 'styled-components';

import Image from "../ImageBotcamp";
import logo from "../../img/attachment.svg";

const AttachmentIcon = styled.div`
    position: absolute;
    right: 55px;
    bottom: 2px;
`;

const ChatAttachmentIcon = ({width, height = 'auto'}) => (
    <AttachmentIcon>
        <Image
            src={logo}
            alt='attachment icon'
            width={width}
            height={height}
        />
    </AttachmentIcon>
);

export default ChatAttachmentIcon;
