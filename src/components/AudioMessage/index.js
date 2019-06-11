import React from "react";
import styled from 'styled-components';

const Audio = styled.audio`
    box-sizing: border-box;
    position: relative;
    background-color: rgba(238,62,37,0.83);
    border-radius: 10px 0 10px 10px;
    margin: 0 16px 20px auto;
    padding: 10px 15px 10px 15px;
`;

const AudioMessage = ({file}) => (
  <Audio controls>
    <source src={URL.createObjectURL(file)} type={file.type}/>
  </Audio>
);

export default AudioMessage;