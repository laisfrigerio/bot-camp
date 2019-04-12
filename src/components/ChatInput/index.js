import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs(({name, id, placeholder, type, props}) => ({
    name: name,
    id: id,
    placeholder: placeholder,
    type: type,
    ...props
}))`
    //width: calc(100% - 105px);
    width: 100vw;
    padding: 13px 0 13px 16px;
    
    &:focus {
        outline:none;   
    }
`;

const ChatInput = ({name, id, placeholder, type, ...props}) => {
    return <Input
                name={name}
                id={id}
                placeholder={placeholder}
                type={type}
                {...props}
            />
};

export default ChatInput;
