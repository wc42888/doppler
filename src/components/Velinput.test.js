import React from 'react';
import { mount } from 'enzyme';
import VelInput from './VelInput';
import { MAX_VEL, MIN_VEL } from '../constants';

const getRandomInt = () => {
  const min = Math.ceil(MIN_VEL);
  const max = Math.floor(MAX_VEL);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

describe('test VelInput component', () => {
  let velInput;

  describe('genernal component tests', () => {
    beforeEach(() => {
      velInput = mount(<VelInput />);
    });

    it('should contain a input field with type number', () => {
      const input = velInput.find('input');
      expect(input.exists()).toBeTruthy();
      expect(input.props().type).toBe('number');
    });
  });

  describe('test component with valid inputs', () => {
    const vel = getRandomInt();
    const setVel = jest.fn();
    beforeEach(() => {
      velInput = mount(<VelInput vel={vel} setVel={setVel} />);
    });

    it('should have the correct value in the input component', () => {
      const input = velInput.find('input');
      expect(input.props().value).toBe(vel);
    });

    it('should call setVel function on change', () => {
      const inputVal = getRandomInt();
      const input = velInput.find('input');
      input.simulate('change', { target: { value: inputVal } });
      expect(setVel).toHaveBeenCalledWith(inputVal);
    });
  });

  describe('test component with invalid input', () => {
    const vel = getRandomInt();
    const setVel = jest.fn();
    beforeEach(() => {
      velInput = mount(<VelInput vel={vel} setVel={setVel} />);
    });

    it('should show a window alert', () => {
      window.alert = jest.fn().mockImplementationOnce();

      const inputVal = 200;
      const input = velInput.find('input');
      input.simulate('change', { target: { value: inputVal } });
      expect(window.alert).toHaveBeenCalledTimes(1);
    });
  });
});
