import styled from 'styled-components';

const Image = styled.img.attrs(({src, alt}) => ({
    alt: alt,
    src: src
}))`
    width: ${props => props.width};
    height:  ${props => props.height}
`;

export default Image;