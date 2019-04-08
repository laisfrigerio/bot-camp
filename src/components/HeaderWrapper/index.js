import styled from "styled-components";

const HeaderWrapper = styled.header`
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
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 90%);
`;

export default HeaderWrapper;
