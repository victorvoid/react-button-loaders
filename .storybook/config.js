import { configure } from '@storybook/react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Heebo:400,600');
  button span {
    font-family: 'Heebo', sans-serif;
    font-weight: 600;
  }
`
// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
