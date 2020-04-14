import { MAX_VEL, MIN_VEL } from './velocity';

export const SLIDER_OFFSET = MIN_VEL - MAX_VEL;

export const V_MAX = Math.log(MAX_VEL - SLIDER_OFFSET);

export const V_MIN = Math.log(MIN_VEL - SLIDER_OFFSET);
