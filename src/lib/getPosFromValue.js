import { MAX_VEL, MIN_VEL, SLIDER_OFFSET, V_MAX, V_MIN } from '../constants';

//  this function calculates the position of
//  the slider on the slider bar
//  base on the value of the velocity

const getPosFromValue = (value) =>
  (
    ((Math.log(value - SLIDER_OFFSET) - V_MIN) / (V_MAX - V_MIN)) *
      (MAX_VEL - MIN_VEL) +
    MIN_VEL
  ).toFixed(1);

export default getPosFromValue;
