import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { Header } from '../../../src';
import testImage from '../../../stories/data/images/storybook-header-bg.png';

describe('Header', () => {
  describe('Default props and rendering - Header with no top border and transparent background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(Header.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <Header id="test-header-id">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the id attribute is set to the root element', () => {
      expect(wrapper.find('div').at(0).prop('id')).toBe('test-header-id-root');
    });

    it('verifies that the "ajc-header-border-grey" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-header-border-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-header-border-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-header-border-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-transparent')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-yellow')).toBeFalsy();
    });

    it('verifies that the id attribute is set to the content element', () => {
      expect(wrapper.find('div#test-header-id-root div div div').prop('id')).toBe('test-header-id');
    });

    it('verifies that the children content is rendered within the content element', () => {
      expect(wrapper.find('div#test-header-id').children().text()).toBe('Header text content.');
    });
  });

  describe('Transferred props and rendering - Header with grey top border and white background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(Header.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <Header id="test-header-id" topBorder="grey" backgroundColour="white">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-header-border-grey" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-header-border-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-header-border-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-header-border-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-white')).toBeTruthy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-yellow')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Header with red top border and image background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(Header.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <Header id="test-header-id" topBorder="red" imageData={testImage}>
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-header-border-grey" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-header-border-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-header-border-red" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-header-border-red')).toBeTruthy();
    });

    it('verifies that the "ajc-background-transparent" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-transparent')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-yellow')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Header with no top border and grey background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(Header.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <Header id="test-header-id" topBorder="none" backgroundColour="grey">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-header-border-grey" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-header-border-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-header-border-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-header-border-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-grey-1')).toBeTruthy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-yellow')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Header with grey top border and yellow background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(Header.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <Header id="test-header-id" topBorder="grey" backgroundColour="yellow">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-header-border-grey" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-header-border-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-header-border-red" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-header-border-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is assigned to the root element', () => {
      expect(wrapper.find('div#test-header-id-root').hasClass('ajc-background-yellow')).toBeTruthy();
    });
  });

  describe('componentDidMount method behaviour - No image data set', () => {
    let documentQuerySelectorSpy;
    let wrapper;

    beforeAll(() => {
      documentQuerySelectorSpy = jest
        .spyOn(global.document, 'querySelector');
      wrapper = TestDev.mount(
        <React.Fragment>
          <Header id="test-header-id" topBorder="red" backgroundColour="grey">
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    afterAll(() => {
      documentQuerySelectorSpy.mockRestore();
    });

    it('verifies that the document query selector functionality is not invoked', () => {
      expect(documentQuerySelectorSpy.mock.calls).toHaveLength(0);
    });
  });

  describe('componentDidMount method behaviour - Image data set', () => {
    let documentQuerySelectorSpy;
    let elementRoot;
    let wrapper;

    beforeAll(() => {
      elementRoot = document.createElement('div');
      elementRoot.style.backgroundImage = undefined;
      documentQuerySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementation(() => {
          return elementRoot;
        });
      wrapper = TestDev.mount(
        <React.Fragment>
          <Header id="test-header-id" topBorder="red" backgroundColour="grey" imageData={testImage}>
            Header text content.
          </Header>
        </React.Fragment>
      );
    });

    afterAll(() => {
      documentQuerySelectorSpy.mockRestore();
    });

    it('verifies that the document query selector functionality is invoked', () => {
      expect(documentQuerySelectorSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the background image of the full hd element is set correctly', () => {
      expect(elementRoot.style.backgroundImage).toBeDefined();
    });
  });
});
