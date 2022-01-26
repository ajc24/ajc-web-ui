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
          <DocumentEditor colour="red" dialogContentAreaColour="grey" reRenderAllowance={500} />
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Editor displaying screenshot with caption item', () => {
    let jsonSnapshot;
    let querySelectorSpy;

    beforeAll(() => {
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementation(() => {
          return {
            textContent: 'screenshot-with-caption',
          };
        });
      const wrapper = TestDev.mount(
        <React.Fragment>
          <DocumentEditor />
        </React.Fragment>
      );
      wrapper.instance().addEditorItem();
      wrapper.update();
      const wrapperHtml = TestDev.html(wrapper);
      jsonSnapshot = TestDev.createSnapshot(wrapperHtml);
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
