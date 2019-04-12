import styled from "styled-components";

const ChatMessageUser = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 257px;
    height: 40px;
    background-color: rgba(238, 62, 37, 0.83);
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 20px;
    margin-right: 16px;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    
    ::after {
        content: " ";
        position: absolute;
        top: 0;
        right: -5px;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #ed5a48;
    }
`;

export default ChatMessageUser;
