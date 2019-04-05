import React from 'react';
import styled from 'styled-components';
import logo from '../../img/botcamp.svg';

const Image = styled.img.attrs(({src, alt}) => ({
    alt: alt,
    src: src
}))`
    width: 248px;
`;

const LogoBotcamp = () => (
    <Image src={logo} alt='logo-botcamp' />
);

export default LogoBotcamp;
