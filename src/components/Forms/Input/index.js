import React from "react";
import styled from "styled-components";

const InputForm = styled.input`
  box-sizing: border-box;
  border: 0;
  height: 35px;
  margin-bottom: 7px;
  padding: 5px 8px;
  width: 100%;
`;

const Input = ({id, name, placeholder, type, value, onChange}) => (
  <InputForm
    id={id}
    name={name}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={onChange}
  />
);

export default Input;
