import React from 'react';
import styled from 'styled-components';
import { MAX_VEL, MIN_VEL } from '../constants';
import { getValueFromPos, getPosFromValue } from '../lib';

const Slider = ({ vel, setVel }) => {
  const onValueChange = (e) => {
    e.preventDefault();
    setVel(getValueFromPos(e.target.value));
  };

  const getVel = () => getPosFromValue(vel);

  return <RangeInput vel={getVel()} onChange={onValueChange} />;
};

const RangeInput = styled.input.attrs(({ vel }) => ({
  type: 'range',
  min: MIN_VEL,
  max: MAX_VEL,
  value: vel,
}))`
  opacity: 0.7;

  &: hover {
    opacity: 1;
  }
`;

export default Slider;
