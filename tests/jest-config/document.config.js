import 'jsdom-global/register';

/* Ensure that all relevant functionality is present for document interactions */
global.document.createRange = () => ({
  getClientRects: () => [],
  selectNodeContents: () => {},
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});
global.document.elementFromPoint = () => {};

/* Ensure that all relevant functionality is present for Element interactions */
Element.prototype.scrollIntoView = () => {};

/* Ensure getComputedStyle functionality is present for <select> elements */
const { getComputedStyle } = global.window;
global.window.getComputedStyle = (elt) => getComputedStyle(elt);
