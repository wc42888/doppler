import React from 'react';
import styled from 'styled-components';

const VelInput = () => (
  <>
    <span>Velocity (km/s): </span>
    <Input />
  </>
);

const Input = styled.input.attrs({
  type: 'number',
  max: 100,
  min: -100,
  step: 0.1,
  placeholder: 'enter your velocity',
})`
  min-width: 10em;
  outline: none;
  margin-left: 10px;
`;

export default VelInput;
