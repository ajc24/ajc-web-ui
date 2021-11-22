import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { SmallDownArrowIcon } from '../../../src';

describe('SmallDownArrowIcon', () => {
  describe('Default props and rendering - Component in black colour', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <SmallDownArrowIcon />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-border-colour-black" class is assigned to the root element', () => {
      expect(wrapper.find('div').at(1).hasClass('ajc-border-colour-black')).toBeTruthy();
    });

    it('verifies that the "ajc-border-colour-white" class is not assigned to the root element', () => {
      expect(wrapper.find('div').at(1).hasClass('ajc-border-colour-white')).toBeFalsy();
    });
  });

  describe('Default props and rendering - Component in white colour', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <SmallDownArrowIcon colour="white" />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-border-colour-black" class is not assigned to the root element', () => {
      expect(wrapper.find('div').at(1).hasClass('ajc-border-colour-black')).toBeFalsy();
    });

    it('verifies that the "ajc-border-colour-white" class is assigned to the root element', () => {
      expect(wrapper.find('div').at(1).hasClass('ajc-border-colour-white')).toBeTruthy();
    });
  });
});
