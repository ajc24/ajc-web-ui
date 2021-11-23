import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { ParagraphHeading } from '../../../src';

describe('ParagraphHeading', () => {
  describe('Default props and rendering - Component with left aligned text', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ParagraphHeading>
            Test paragraph heading.
          </ParagraphHeading>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-flex-justify-left" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-left')).toBeTruthy();
    });

    it('verifies that the "ajc-flex-justify-center" class is not assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-center')).toBeFalsy();
    });

    it('verifies that the "ajc-flex-justify-right" class is not assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-right')).toBeFalsy();
    });

    it('verifies that the "ajc-spacing-top-large" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-spacing-top-large')).toBeTruthy();
    });

    it('verifies that the children text content is correctly rendered in the heading element', () => {
      expect(wrapper.find('h2').children().text()).toBe('Test paragraph heading.');
    });
  });

  describe('Transferred props and rendering - Component with center aligned text and reduced upper spacing', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ParagraphHeading alignment="center" additionalUpperSpacing={false}>
            Test paragraph heading.
          </ParagraphHeading>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-flex-justify-left" class is not assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-left')).toBeFalsy();
    });

    it('verifies that the "ajc-flex-justify-center" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-center')).toBeTruthy();
    });

    it('verifies that the "ajc-flex-justify-right" class is not assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-right')).toBeFalsy();
    });

    it('verifies that the "ajc-spacing-top-large" class is not assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-spacing-top-large')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Component with right aligned text', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ParagraphHeading alignment="right">
            Test paragraph heading.
          </ParagraphHeading>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-flex-justify-left" class is not assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-left')).toBeFalsy();
    });

    it('verifies that the "ajc-flex-justify-center" class is not assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-center')).toBeFalsy();
    });

    it('verifies that the "ajc-flex-justify-right" class is assigned to the root element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-right')).toBeTruthy();
    });
  });
});
