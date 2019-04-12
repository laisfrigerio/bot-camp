import styled from "styled-components";

const ChatHeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    background-color: #1a1a3c;
    width: 100vw;
    height: auto;
    padding: 10px 16px;
    //clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 90%);
    
    ::after {
        content: " ";
        position: absolute;
        bottom: 1px;
        left: 0;
        transform: translateY(100%);
        border: 0px solid transparent;
        border-top: 15px solid #1a1a3c;
        border-left-width: 100vw;
    }
`;

export default ChatHeaderWrapper;
