import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: #fff;
    background-color: #ee3e25;
    width: 280px;
    height: 50px;
    font-size: 20px;
    border-radius: 25px;
    text-transform: uppercase;
    cursor: pointer;
`;

const BtnBotCamp = ({ content }) => <Button>{content}</Button>;
export default BtnBotCamp;
