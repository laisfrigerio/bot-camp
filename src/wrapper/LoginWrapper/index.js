import styled from 'styled-components';
import background from '../../img/background.svg';

const LoginWrapper = styled.main`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-repeat: repeat;
    background-position: center;
    padding-top: 120px;
    padding-bottom: 80px;
    background-color: #1a1a3c;
`;

export default LoginWrapper;
