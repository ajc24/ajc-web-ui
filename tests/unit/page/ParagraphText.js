import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { ParagraphText } from '../../../src';

describe('ParagraphText', () => {
  describe('Default props and rendering - Default style with left aligned text', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ParagraphText>
            Test paragraph text.
          </ParagraphText>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-flex-justify-left" class is assigned to the root element', () => {
      expect(wrapper.find('p').hasClass('ajc-flex-justify-left')).toBeTruthy();
    });

    it('verifies that the "ajc-flex-justify-center" class is not assigned to the root element', () => {
      expect(wrapper.find('p').hasClass('ajc-flex-justify-center')).toBeFalsy();
    });

    it('verifies that the "ajc-flex-justify-right" class is not assigned to the root element', () => {
      expect(wrapper.find('p').hasClass('ajc-flex-justify-right')).toBeFalsy();
    });

    it('verifies that the children text content is correctly rendered in the main content element', () => {
      expect(wrapper.find('p').children().text()).toBe('Test paragraph text.');
    });

    it('verifies that none of the text content is rendered in bold', () => {
      expect(wrapper.find('b').exists()).toBeFalsy();
    });

    it('verifies that none of the text content is rendered in italics', () => {
      expect(wrapper.find('i').exists()).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Default style with center aligned text', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ParagraphText alignment="center">
            Test paragraph text.
          </ParagraphText>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-flex-justify-left" class is not assigned to the root element', () => {
      expect(wrapper.find('p').hasClass('ajc-flex-justify-left')).toBeFalsy();
    });

    it('verifies that the "ajc-flex-justify-center" class is assigned to the root element', () => {
      expect(wrapper.find('p').hasClass('ajc-flex-justify-center')).toBeTruthy();
    });

    it('verifies that the "ajc-flex-justify-right" class is not assigned to the root element', () => {
      expect(wrapper.find('p').hasClass('ajc-flex-justify-right')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Default style with right aligned text', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ParagraphText alignment="right">
            Test paragraph text.
          </ParagraphText>
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-flex-justify-left" class is not assigned to the root element', () => {
      expect(wrapper.find('p').hasClass('ajc-flex-justify-left')).toBeFalsy();
    });

    it('verifies that the "ajc-flex-justify-center" class is not assigned to the root element', () => {
      expect(wrapper.find('p').hasClass('ajc-flex-justify-center')).toBeFalsy();
    });

    it('verifies that the "ajc-flex-justify-right" class is assigned to the root element', () => {
      expect(wrapper.find('p').hasClass('ajc-flex-justify-right')).toBeTruthy();
    });
  });

  describe('Transferred props and rendering - Bold style with left aligned text', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ParagraphText style="bold" alignment="left">
            Test paragraph text.
          </ParagraphText>
        </React.Fragment>
      );
    });

    it('verifies that the children text content is correctly rendered in bold', () => {
      expect(wrapper.find('p b').exists()).toBeTruthy();
    });

    it('verifies that the children text content is correctly rendered in the main content element', () => {
      expect(wrapper.find('b').children().text()).toBe('Test paragraph text.');
    });

    it('verifies that none of the text content is rendered in italics', () => {
      expect(wrapper.find('i').exists()).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Italics style with left aligned text', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <ParagraphText style="italics" alignment="left">
            Test paragraph text.
          </ParagraphText>
        </React.Fragment>
      );
    });

    it('verifies that none of the text content is rendered in bold', () => {
      expect(wrapper.find('b').exists()).toBeFalsy();
    });

    it('verifies that the children text content is correctly rendered in italics', () => {
      expect(wrapper.find('p i').exists()).toBeTruthy();
    });

    it('verifies that the children text content is correctly rendered in the main content element', () => {
      expect(wrapper.find('i').children().text()).toBe('Test paragraph text.');
    });
  });
});
