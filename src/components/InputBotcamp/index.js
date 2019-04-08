import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs(({name, id, placeholder, type, props}) => ({
    name: name,
    id: id,
    placeholder: placeholder,
    type: type,
    ...props
}))
`
    width: 100%;
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
    background-color: #fbfbff;
    padding: 13px 0 13px 16px;
`;

const InputBotcamp = ({name, id, placeholder, type, ...props}) => {
    return <Input
                name={name}
                id={id}
                placeholder={placeholder}
                type={type}
                {...props}
            />
};

export default InputBotcamp;
