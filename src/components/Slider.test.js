import React from 'react';
import { mount } from 'enzyme';
import Slider from './Slider';
import { getRandomInt, getPosFromValue, getValueFromPos } from '../lib';

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

  describe('test components with valid inputs', () => {
    const vel = getRandomInt();
    const setVel = jest.fn();

    beforeEach(() => {
      slider = mount(<Slider vel={vel} setVel={setVel} />);
    });

    it('should place the slider on the right value', () => {
      const input = slider.find('input');
      expect(input.props().value.toString()).toBe(
        getPosFromValue(vel).toString(),
      );
    });

    it('should call setVel function on change', () => {
      const inputVal = getRandomInt();
      const input = slider.find('input');
      input.simulate('change', { target: { value: inputVal } });
      expect(setVel).toHaveBeenCalledWith(getValueFromPos(inputVal));
    });
  });
});
