import { MAX_VEL, MIN_VEL } from '../constants';

const getRandomInt = () => {
  const min = Math.ceil(MIN_VEL);
  const max = Math.floor(MAX_VEL);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomInt;
