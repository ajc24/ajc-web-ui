import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-jest-enzyme';
import { HorizontalButtonList } from '../../../src';

describe('HorizontalButtonList', () => {
  const mockOnClick = jest.fn();
  const mockOnClickLeft = jest.fn();
  const mockOnClickRight = jest.fn();
  const singleButtonList = [
    {
      id: 'test-single-button-id',
      onClick: mockOnClick,
      title: 'Test Default Single Grey Button',
      type: 'button',
    },
  ];
  const singleSubmitButtonList = [
    {
      id: 'test-single-submit-button-id',
      onClick: jest.fn(),
      title: 'Test Submit Button',
      type: 'submit',
    },
  ];
  const twoButtonsList = [
    {
      id: 'test-button-1-id',
      onClick: mockOnClickLeft,
      title: 'Test Button 1',
      type: 'button',
    },
    {
      id: 'test-button-2-id',
      onClick: mockOnClickRight,
      title: 'Test Button 2',
      type: 'button',
    },
  ];

  describe('Default props and rendering - Single grey left aligned button', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <HorizontalButtonList buttonList={singleButtonList} />
        </React.Fragment>
      );
    });

    it('verifies that the ParagraphHeading element is not rendered', () => {
      expect(wrapper.find('ParagraphHeading').exists()).toBeFalsy();
    });

    it('verifies that the "ajc-flex-justify-left" class is assigned to the root button list element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-left')).toBeTruthy();
    });

    it('verifies that the "ajc-flex-justify-center" class is not assigned to the root button list element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-center')).toBeFalsy();
    });

    it('verifies that the "ajc-flex-justify-right" class is not assigned to the root button list element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-right')).toBeFalsy();
    });

    it('verifies that the "ajc-spacing-top-reduced" class is not assigned to the root button list element', () => {
      expect(wrapper.find('div').hasClass('ajc-spacing-top-reduced')).toBeFalsy();
    });

    it('verifies that the id attribute is set to the button element', () => {
      expect(wrapper.find('button').prop('id')).toBe('test-single-button-id');
    });

    it('verifies that the "ajc-button-red" class is not assigned to the button element', () => {
      expect(wrapper.find('button').hasClass('ajc-button-red')).toBeFalsy();
    });

    it('verifies that the "ajc-button-grey" class is assigned to the button element', () => {
      expect(wrapper.find('button').hasClass('ajc-button-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-spacing-right-small" class is not assigned to the button element', () => {
      expect(wrapper.find('button').hasClass('ajc-spacing-right-small')).toBeFalsy();
    });

    it('verifies that the type attribute is set to the button element', () => {
      expect(wrapper.find('button').prop('type')).toBe('button');
    });

    it('verifies that the onClick functionality is set to the button element', () => {
      expect(wrapper.find('button').prop('onClick')).toBeDefined();
    });

    it('verifies that the title text content is set to the button element', () => {
      expect(wrapper.find('button').text()).toBe('Test Default Single Grey Button');
    });
  });

  describe('onClick() method behaviour - Single grey left aligned button', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <HorizontalButtonList buttonList={singleButtonList} />
        </React.Fragment>
      );
      /* Invoke the onClick functionality */
      wrapper.find('button#test-single-button-id').prop('onClick')();
    });

    afterAll(() => {
      mockOnClick.mockClear();
    });

    it('verifies that the onClick functionality is invoked', () => {
      expect(mockOnClick.mock.calls).toHaveLength(1);
    });
  });

  describe('Transferred props and rendering - Multiple center aligned red buttons', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <HorizontalButtonList colour="red" alignment="center" buttonList={twoButtonsList} />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-flex-justify-left" class is not assigned to the root button list element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-left')).toBeFalsy();
    });

    it('verifies that the "ajc-flex-justify-center" class is assigned to the root button list element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-center')).toBeTruthy();
    });

    it('verifies that the "ajc-flex-justify-right" class is not assigned to the root button list element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-right')).toBeFalsy();
    });

    it('verifies that the "ajc-spacing-top-reduced" class is not assigned to the root button list element', () => {
      expect(wrapper.find('div').hasClass('ajc-spacing-top-reduced')).toBeFalsy();
    });

    it('verifies that two buttons are rendered as a child of the root button list element', () => {
      expect(wrapper.find('div').children()).toHaveLength(2);
    });

    it('verifies that the "ajc-button-red" class is not assigned to the leftmost button element', () => {
      expect(wrapper.find('button#test-button-1-id').hasClass('ajc-button-red')).toBeTruthy();
    });

    it('verifies that the "ajc-button-grey" class is assigned to the leftmost button element', () => {
      expect(wrapper.find('button#test-button-1-id').hasClass('ajc-button-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-spacing-right-small" class is assigned to the leftmost button element', () => {
      expect(wrapper.find('button#test-button-1-id').hasClass('ajc-spacing-right-small')).toBeTruthy();
    });

    it('verifies that the id attribute is set to the rightmost button element', () => {
      expect(wrapper.find('button').at(1).prop('id')).toBe('test-button-2-id');
    });

    it('verifies that the "ajc-button-red" class is assigned to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').hasClass('ajc-button-red')).toBeTruthy();
    });

    it('verifies that the "ajc-button-grey" class is not assigned to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').hasClass('ajc-button-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-spacing-right-small" class is not assigned to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').hasClass('ajc-spacing-right-small')).toBeFalsy();
    });

    it('verifies that the type attribute is set to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').prop('type')).toBe('button');
    });

    it('verifies that the onClick functionality is set to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').prop('onClick')).toBeDefined();
    });

    it('verifies that the title text content is set to the rightmost button element', () => {
      expect(wrapper.find('button#test-button-2-id').text()).toBe('Test Button 2');
    });
  });

  describe('onClick() method behaviour - Multiple center aligned red buttons', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <HorizontalButtonList colour="red" alignment="center" buttonList={twoButtonsList} />
        </React.Fragment>
      );
      /* Invoke the onClick functionality in both buttons */
      wrapper.find('button#test-button-1-id').prop('onClick')();
      wrapper.find('button#test-button-2-id').prop('onClick')();
    });

    afterAll(() => {
      mockOnClickLeft.mockClear();
      mockOnClickRight.mockClear();
    });

    it('verifies that the onClick functionality for the leftmost button is invoked', () => {
      expect(mockOnClickLeft.mock.calls).toHaveLength(1);
    });

    it('verifies that the onClick functionality for the rightmost button is invoked', () => {
      expect(mockOnClickRight.mock.calls).toHaveLength(1);
    });
  });

  describe('Transferred props and rendering - Single right aligned grey submit button', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <HorizontalButtonList colour="grey" alignment="right" buttonList={singleSubmitButtonList} />
        </React.Fragment>
      );
    });

    it('verifies that the "ajc-flex-justify-center" class is not assigned to the root button list element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-center')).toBeFalsy();
    });

    it('verifies that the "ajc-flex-justify-right" class is assigned to the root button list element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-right')).toBeTruthy();
    });

    it('verifies that the "ajc-flex-justify-left" class is not assigned to the root button list element', () => {
      expect(wrapper.find('div').hasClass('ajc-flex-justify-left')).toBeFalsy();
    });

    it('verifies that the type attribute is set to the submit button element', () => {
      expect(wrapper.find('button#test-single-submit-button-id').prop('type')).toBe('submit');
    });
  });

  describe('Transferred props and rendering - Left aligned multiple red buttons with label text, default upper spacing', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <HorizontalButtonList colour="red" alignment="left" buttonList={twoButtonsList} labelText="Test Buttons List Label Text" />
        </React.Fragment>
      );
    });

    it('verifies that the ParagraphHeading element is rendered', () => {
      expect(wrapper.find('ParagraphHeading').exists()).toBeTruthy();
    });

    it('verifies that the additional upper spacing property is correctly passed to the ParagraphHeading element', () => {
      expect(wrapper.find('ParagraphHeading').prop('additionalUpperSpacing')).toBeFalsy();
    });

    it('verifies that the alignment property is correctly passed to the ParagraphHeading element', () => {
      expect(wrapper.find('ParagraphHeading').prop('alignment')).toBe('left');
    });

    it('verifies that the label text property is correctly passed to the ParagraphHeading element', () => {
      expect(wrapper.find('ParagraphHeading').children().text()).toBe('Test Buttons List Label Text');
    });

    it('verifies that the root button list element is rendered', () => {
      expect(wrapper.find('div button').exists()).toBeTruthy();
    });

    it('verifies that two buttons are rendered as a child of the root button list element', () => {
      expect(wrapper.find('div button')).toHaveLength(2);
    });
  });

  describe('Transferred props and rendering - Center aligned grey buttons list with label text, added upper spacing', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <HorizontalButtonList colour="grey" additionalUpperSpacing={true} alignment="center" buttonList={twoButtonsList} labelText="Test Buttons List Label Text" />
        </React.Fragment>
      );
    });

    it('verifies that the ParagraphHeading element is rendered', () => {
      expect(wrapper.find('ParagraphHeading').exists()).toBeTruthy();
    });

    it('verifies that the additional upper spacing property is correctly passed to the ParagraphHeading element', () => {
      expect(wrapper.find('ParagraphHeading').prop('additionalUpperSpacing')).toBeTruthy();
    });

    it('verifies that the alignment property is correctly passed to the ParagraphHeading element', () => {
      expect(wrapper.find('ParagraphHeading').prop('alignment')).toBe('center');
    });
  });

  describe('Transferred props and rendering - Right aligned multiple red buttons with label text, no upper spacing', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = TestDev.mount(
        <React.Fragment>
          <HorizontalButtonList colour="red" additionalUpperSpacing={false} alignment="right" buttonList={twoButtonsList} labelText="Test Buttons List Label Text" />
        </React.Fragment>
      );
    });

    it('verifies that the ParagraphHeading element is rendered', () => {
      expect(wrapper.find('ParagraphHeading').exists()).toBeTruthy();
    });

    it('verifies that the additional upper spacing property is correctly passed to the ParagraphHeading element', () => {
      expect(wrapper.find('ParagraphHeading').prop('additionalUpperSpacing')).toBeFalsy();
    });

    it('verifies that the alignment property is correctly passed to the ParagraphHeading element', () => {
      expect(wrapper.find('ParagraphHeading').prop('alignment')).toBe('right');
    });
  });
});
