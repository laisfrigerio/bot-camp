import styled from "styled-components";

const ChatContentWrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100vw;
    height: calc(100vh - 150px);
    margin-top: 25px;
    overflow: auto;
`;

export default ChatContentWrapper;
