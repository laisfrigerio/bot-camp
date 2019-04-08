import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs(({name, id, placeholder, props}) => ({
    name: name,
    id: id,
    placeholder: placeholder,
    ...props
}))
`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
`;

const InputBotcamp = ({name, id, placeholder}) => {
    return <Input
                name={name}
                id={id}
                placeholder={placeholder}
            />
};

export default InputBotcamp;
