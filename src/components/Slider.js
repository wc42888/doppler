import React from 'react';
import styled from 'styled-components';
import { MAX_VEL, MIN_VEL } from '../constants';

const Slider = ({ vel }) => <RangeInput vel={vel} />;

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
