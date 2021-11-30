import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { PageContent } from '../../../src';

describe('PageContent', () => {
  describe('Default props and rendering - Component with white background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(PageContent.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <PageContent title="Test Title">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the aria-label attribute is correctly set to the root element', () => {
      expect(wrapper.find('main').prop('aria-label')).toBe('Test Title');
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-white')).toBeTruthy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-yellow')).toBeFalsy();
    }); 

    it('verifies that the children text content is correctly rendered in the content element', () => {
      expect(wrapper.find('div').at(2).text()).toBe('This is a test.');
    });
  });

  describe('Transferred props and rendering - Component with grey background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(PageContent.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <PageContent title="Test Title" colour="grey">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });
    
    it('verifies that the "ajc-background-grey-1" class is assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-grey-1')).toBeTruthy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-yellow')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Component with transparent background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(PageContent.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <PageContent title="Test Title" colour="transparent">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });
    
    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-transparent')).toBeTruthy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-yellow')).toBeFalsy();
    });
  });

  describe('Transferred props and rendering - Component with yellow background', () => {
    let componentDidMountSpy;
    let wrapper;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(PageContent.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      wrapper = TestDev.mount(
        <React.Fragment>
          <PageContent title="Test Title" colour="yellow">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });
    
    it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is assigned to the root element', () => {
      expect(wrapper.find('main').hasClass('ajc-background-yellow')).toBeTruthy();
    });
  });

  describe('componentDidMount() functionality', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <PageContent title="Test Title" colour="transparent">
            This is a test.
          </PageContent>
        </React.Fragment>
      );
    });

    afterAll(() => {
      document.title = '';
      document.body.classList.remove('ajc-width-body');
    });

    it('verifies that the document title is set correctly', () => {
      expect(document.title).toBe('Test Title');
    });

    it('verifies that the "ajc-width-body" class is assigned to the document body', () => {
      expect(document.body.classList.contains('ajc-width-body')).toBeTruthy();
    });
  });
});
