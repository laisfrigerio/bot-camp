import React from 'react';
import styled from 'styled-components';
import logo from '../../img/botcamp.svg';

const Logo = styled.img.attrs(({src, alt}) => ({
    alt: alt,
    src: src
}))`
    width: 248px;
`;

const LogoBotcamp = () => (
    <Logo src={logo} alt='logo-botcamp' />
);

export default LogoBotcamp;
