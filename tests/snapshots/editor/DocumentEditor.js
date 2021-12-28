import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { DocumentEditor } from '../../../src';

jest.useFakeTimers();

describe('DocumentEditor', () => {
  describe('Default props and rendering - Component with grey theme', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <DocumentEditor />
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component with all custom properties set', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <DocumentEditor colour="red" dialogContentAreaColour="grey" />
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Dialog visible - Add new item dialog', () => {
    let jsonSnapshot;

    beforeAll(() => {
      const wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor />
        </React.Fragment>
      );
      wrapper.instance().showAddNewItemDialog();
      wrapper.update();
      const wrapperHtml = TestDev.html(wrapper);
      jsonSnapshot = TestDev.createSnapshot(wrapperHtml);
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Dialog visible - Loading new item dialog', () => {
    let addEditorItemSpy;
    let jsonSnapshot;
    let querySelectorSpy;

    beforeAll(() => {
      querySelectorSpy = jest
        .spyOn(document, 'querySelector')
        .mockImplementationOnce(() => {
          return {
            value: 'screenshot-with-caption',
          };
        });
      const wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor />
        </React.Fragment>
      );
      addEditorItemSpy = jest
        .spyOn(wrapper.instance(), 'addEditorItem')
        .mockImplementation(() => {});
      wrapper.instance().showLoadingNewItemDialog();
      wrapper.update();
      const wrapperHtml = TestDev.html(wrapper);
      jsonSnapshot = TestDev.createSnapshot(wrapperHtml);
      jest.runAllTimers();
    });

    afterAll(() => {
      addEditorItemSpy.mockRestore();
      querySelectorSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Editor displaying screenshot with caption item', () => {
    let jsonSnapshot;

    beforeAll(() => {
      const wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor />
        </React.Fragment>
      );
      wrapper.instance().addEditorItem('screenshot-with-caption');
      wrapper.update();
      const wrapperHtml = TestDev.html(wrapper);
      jsonSnapshot = TestDev.createSnapshot(wrapperHtml);
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
