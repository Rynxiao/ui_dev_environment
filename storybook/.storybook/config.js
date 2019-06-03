import { configure, addParameters, addDecorator } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { addReadme } from 'storybook-readme';

addDecorator(addReadme);

setConsoleOptions({
  panelExclude: [],
});

addParameters({
  backgrounds: [
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
