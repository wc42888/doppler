import React from 'react';
import { mount } from 'enzyme';
import VelInput from './VelInput';

describe('test VelInput component', () => {
  let velInput;

  beforeEach(() => {
    velInput = mount(<VelInput />);
  });

  it('should contain a input field with type number', () => {
    const input = velInput.find('input');
    expect(input.exists()).toBeTruthy();
    expect(input.props().type).toBe('number');
  });
});
