import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { ParagraphHeading } from '../../../src';

describe('ParagraphHeading', () => {
  describe('Default props and rendering - Component with left aligned text', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ParagraphHeading>
            Test paragraph heading.
          </ParagraphHeading>
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component with center aligned text and reduced upper spacing', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ParagraphHeading alignment="center" additionalUpperSpacing={false}>
            Test paragraph heading.
          </ParagraphHeading>
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });

  describe('Transferred props and rendering - Component with right aligned text', () => {
    let jsonSnapshot;

    beforeAll(() => {
      jsonSnapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ParagraphHeading alignment="right">
            Test paragraph heading.
          </ParagraphHeading>
        </React.Fragment>
      );
    });
    it('verifies the snapshot for the component', () => {
      expect(jsonSnapshot).toMatchSnapshot();
    });
  });
});
