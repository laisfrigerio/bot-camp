import React from 'react';

import Image from "../ImageBotcamp";
import logo from "../../img/botcamp.png";

const LogoBotcamp = ({width, height = 'auto'}) => (
    <Image
        src={logo}
        alt='logo-botcamp'
        width={width}
        height={height}
    />
);

export default LogoBotcamp;
