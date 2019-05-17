import styled from "styled-components";

const ChatMessageUser = styled.p`
    box-sizing: border-box;
    position: relative;
    width: auto;
    min-width: 257px;
    height: auto;
    background-color: rgba(238, 62, 37, 0.83);
    border-radius: 10px 0 10px 10px;
    color: #fff;
    font-size: 16px;
    font-family: Roboto, 'Open Sans', sans-serif;
    margin: 0 16px 20px auto;
    padding: 10px 0 10px 15px;
    
    /**
    ::after {
        content: " ";
        position: absolute;
        top: 0;
        right: -5px;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #ed5a48;
    }
    */
`;

export default ChatMessageUser;
