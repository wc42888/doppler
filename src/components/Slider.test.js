import React from 'react';
import { mount } from 'enzyme';
import Slider from './Slider';

describe('test Slider component', () => {
  let slider;
  describe('general tests', () => {
    beforeEach(() => {
      slider = mount(<Slider />);
    });

    it('should contain a input with range type', () => {
      const input = slider.find('input');
      expect(input.props().type).toBe('range');
    });
  });
});
