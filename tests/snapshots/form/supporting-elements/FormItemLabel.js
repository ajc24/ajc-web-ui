import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import FormItemLabel from '../../../../src/ui-elements/form/supporting-elements/FormItemLabel';

describe('FormItemLabel', () => {
  describe('Default props and rendering - Standalone component, no additional spacing', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FormItemLabel id="form-item-label-id" labelText="Test Form Item Label Text:" />
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Dialog component with additional spacing', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FormItemLabel id="form-item-label-id" labelText="Test Form Item Label Text:" additionalUpperSpacing={true} isDialogFormItem={true} />
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
