import { create } from '@storybook/theming';
import { generateTheme } from 'ajc-storybook';

/* Parameters: customTheme, customBrandTitle, customBrandUrl, customBrandImage */
const theme = generateTheme('light', 'AJC Web UI', 'https://ajc24.github.io/ajc-web-ui/', '');

export default create(theme);