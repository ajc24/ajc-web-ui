import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { PageMask } from '../../../src';

describe('PageMask', () => {
  describe('Default props and rendering - Non visible page mask', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <PageMask id="test-id" onClose={() => {}}>
            Test Page Mask text.
          </PageMask>
        </React.Fragment>
      );
    });

    it('verifies that the root element is not rendered', () => {
      expect(wrapper.find('div#page-mask-test-id-root').exists()).toBeFalsy();
    });

    it('verifies that the close button element is not rendered', () => {
      expect(wrapper.find('button#page-mask-test-id-close-button').exists()).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Component with grey theme', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <PageMask id="test-id" isDisplayed={true} colour="grey" onClose={() => {}}>
            Test Page Mask text.
          </PageMask>
        </React.Fragment>
      );
    });

    it('verifies that the id attribute is set correctly to the root element', () => {
      expect(wrapper.find('div').at(0).prop('id')).toBe('page-mask-test-id-root');
    });

    it('verifies that the id attribute is set correctly to the content element', () => {
      expect(wrapper.find('div#page-mask-test-id-root div div div').prop('id')).toBe('page-mask-test-id-content');
    });

    it('verifies that the children text content is rendered in the content element', () => {
      expect(wrapper.find('div#page-mask-test-id-content').children().text()).toBe('Test Page Mask text.');
    });

    it('verifies that the id property is correctly passed to the PageMaskCloseButton element', () => {
      expect(wrapper.find('PageMaskCloseButton').prop('id')).toBe('page-mask-test-id-close-button');
    });

    it('verifies that the colour property is correctly passed to the PageMaskCloseButton element', () => {
      expect(wrapper.find('PageMaskCloseButton').prop('colour')).toBe('grey');
    });

    it('verifies that the onClose property is correctly passed to the PageMaskCloseButton element', () => {
      expect(wrapper.find('PageMaskCloseButton').prop('onClose')).toBeDefined();
    });
  });

  describe('Transferred props and rendering - Component with red theme', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <PageMask id="test-id" isDisplayed={true} colour="red" onClose={() => {}}>
            Test Page Mask text.
          </PageMask>
        </React.Fragment>
      );
    });

    it('verifies that the colour property is correctly passed to the PageMaskCloseButton element', () => {
      expect(wrapper.find('PageMaskCloseButton').prop('colour')).toBe('red');
    });
  });

  describe('Transferred props and rendering - onClose functionality not set', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <PageMask id="test-id" isDisplayed={true}>
            Test Page Mask text.
          </PageMask>
        </React.Fragment>
      );
    });

    it('verifies that the PageMaskCloseButton element is not rendered', () => {
      expect(wrapper.find('PageMaskCloseButton').children()).toHaveLength(0);
    });
  });
});
