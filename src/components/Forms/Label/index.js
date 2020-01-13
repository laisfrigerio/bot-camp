import React from "react";
import styled from 'styled-components';

const LabelForm = styled.label`
  color: #fff;
  margin-bottom: 7px;
  width: 100%;
`;

const Label = ({id, name, label}) => (
  <LabelForm id={id} name={name}>{label}</LabelForm>
);

export default Label;
