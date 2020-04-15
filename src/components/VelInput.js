import React from 'react';
import styled from 'styled-components';
import { MAX_VEL, MIN_VEL } from '../constants';

const VelInput = ({ vel, setVel }) => {
  const onVelChange = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;

    if (value > MAX_VEL || value < MIN_VEL) {
      window.alert(
        'invalid number, please enter a number between -100 and 100',
      );
      return;
    }

    setVel(value);
  };

  return (
    <Container>
      <span>Velocity (km/s): </span>
      <Input vel={vel} onChange={onVelChange} />
    </Container>
  );
};

const Container = styled.div`
  diplay: flex;
`;

const Input = styled.input.attrs(({ vel }) => ({
  type: 'number',
  max: 100,
  min: -100,
  step: 0.1,
  placeholder: 'enter your velocity',
  value: vel,
}))`
  min-width: 10em;
  outline: none;
  margin-left: 10px;
`;

export default VelInput;
