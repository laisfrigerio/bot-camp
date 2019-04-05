import styled from 'styled-components';
import background from '../../img/background.svg';

const LoginWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
`;

export default LoginWrapper;
