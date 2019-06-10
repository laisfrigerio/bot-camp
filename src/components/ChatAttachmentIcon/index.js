import React from 'react';
import styled from 'styled-components';

import Image from "../ImageBotcamp";
import logo from "../../img/attachment.svg";

const AttachmentIcon = styled.div`
    position: absolute;
    right: 55px;
    bottom: 2px;
    
    > input {
      display: none;
    }
`;

const ChatAttachmentIcon = ({width, height = 'auto', onChange}) => (
    <AttachmentIcon>
        <label htmlFor="file">
          <Image
            src={logo}
            alt='attachment icon'
            width={width}
            height={height}
          />
        </label>
        <input type="file" id="file" onChange={onChange} />
    </AttachmentIcon>
);

export default ChatAttachmentIcon;
