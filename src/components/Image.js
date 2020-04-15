import styled from 'styled-components';
import { getHueRotate } from '../lib';

const Image = styled.img.attrs(({ src, vel }) => ({
  src,
  style: {
    filter: `hue-rotate(${getHueRotate(vel)}deg)`,
  },
}))``;

export default Image;
