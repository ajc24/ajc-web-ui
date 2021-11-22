import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { SmallFooter } from '../../../src';

describe('SmallFooter', () => {
  describe('Default props and rendering - Component with grey background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <SmallFooter>
            This is a test.
          </SmallFooter>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-background-grey-2" class is assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-background-grey-2')).toBeTruthy();
    });

    it('verifies that the "ajc-background-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div').at(0).hasClass('ajc-background-red')).toBeFalsy();
    });

    it('verifies that the children text content is correctly rendered in the main content element', () => {
      expect(wrapper.find('div.ajc-footer-small-content').text()).toBe('This is a test.');
    });
  });

  describe('Transferred props and rendering - Component with red background', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <SmallFooter colour="red">
            This is a test.
          </SmallFooter>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-background-grey-2" class is not assigned to the root element', () => {
      expect(wrapper.find('div.ajc-footer-small').hasClass('ajc-background-grey-2')).toBeFalsy();
    });

    it('verifies that the "ajc-background-red" class is assigned to the root element', () => {
      expect(wrapper.find('div.ajc-footer-small').hasClass('ajc-background-red')).toBeTruthy();
    });
  });
});
