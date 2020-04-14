import { MAX_VEL, MIN_VEL, SLIDER_OFFSET, V_MAX, V_MIN } from '../constants';

//  this function calculate the value of the velocity
//  base on the current position of the slider
const getValueFromPos = (position) => {
  return (
    Math.exp(
      V_MIN + ((position - MIN_VEL) / (MAX_VEL - MIN_VEL)) * (V_MAX - V_MIN),
    ) + SLIDER_OFFSET
  ).toFixed(1);
};

export default getValueFromPos;
