import React from 'react';
import { mount } from 'enzyme';
import Image from './Image';
import { getRandomInt, getHueRotate } from '../lib';

describe('test Image component', () => {
  let image;
  describe('general tests', () => {
    const src = 'location_of_file';
    const vel = getRandomInt();
    beforeEach(() => {
      image = mount(<Image src={src} vel={vel} />);
    });

    it('set the src props to the input src', () => {
      expect(image.props().src).toBe(src);
    });

    it('should get the hue rotatiion to current value', () => {
      const img = image.find('img');
      expect(img.prop('style')).toHaveProperty(
        'filter',
        `hue-rotate(${getHueRotate(vel)}deg)`,
      );
    });
  });
});
