import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: #fff;
    background-color: #ee3e25;
    width: 280px;
    height: 50px;
    margin: 50px auto 0 auto;
    font-size: 20px;
    border-radius: 25px;
    text-transform: uppercase;
    cursor: pointer;
    
    &:disabled {
      background-color: gray;
      cursor: none;
    }
`;

const BtnBotCamp = ({ label, type = 'button', isDisabled = false }) => <Button disabled={isDisabled} type={type}>{label}</Button>;
export default BtnBotCamp;
