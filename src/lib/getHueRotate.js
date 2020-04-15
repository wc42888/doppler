import { BLUE, RED, MAX_VEL } from '../constants';

//  calculate the steps to blue and
//  red color
const stepToBLUE = BLUE / MAX_VEL;
const stepToRED = RED / MAX_VEL;

const getHueRotate = (vel) => {
  if (vel === 0) return 0;
  if (vel > 0) return stepToRED * vel;
  return stepToBLUE * Math.abs(vel);
};

export default getHueRotate;
