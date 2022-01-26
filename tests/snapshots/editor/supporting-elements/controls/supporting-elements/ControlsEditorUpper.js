import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import ControlsEditorUpper from '../../../../../../src/ui-elements/editor/supporting-elements/controls/supporting-elements/ControlsEditorUpper';

describe('ControlsEditorUpper', () => {
  describe('Default props and rendering', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ControlsEditorUpper addEditorItem={jest.fn()} />
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - All properties custom set', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ControlsEditorUpper addEditorItem={jest.fn()} colour="red" dialogContentAreaColour="grey" additionalSpacingAboveControls={true} />
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
          <ControlsEditorUpper addEditorItem={jest.fn()} />
        </React.Fragment>
      );
      wrapper.find('ControlsEditorUpper').instance().showAddNewItemDialog();
      wrapper.update();
      const wrapperHtml = TestDev.html(wrapper);
      jsonSnapshot = TestDev.createSnapshot(wrapperHtml);
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Dialog visible - Loading new item dialog', () => {
    let jsonSnapshot;
    
    beforeAll(() => {
      const wrapper = TestDev.mount(
        <React.Fragment>
          <ControlsEditorUpper addEditorItem={jest.fn()} />
        </React.Fragment>
      );
      wrapper.find('ControlsEditorUpper').instance().showLoadingNewItemDialog();
      wrapper.update();
      const wrapperHtml = TestDev.html(wrapper);
      jsonSnapshot = TestDev.createSnapshot(wrapperHtml);
    });

    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
