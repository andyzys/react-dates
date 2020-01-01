import React from 'react';
import moment from 'moment';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';

import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import registerInterfaceWithDefaultTheme from '../src/utils/registerInterfaceWithDefaultTheme';

import '../css/storybook.scss';

registerInterfaceWithDefaultTheme(aphroditeInterface);

addDecorator(story => {
  moment.locale('en');
  return story();
});

addDecorator(story => (
  <div>
    <div
      style={{
        background: '#fff',
        height: 6 * 8,
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        padding: '8px 40px 8px 8px',
        overflow: 'scroll',
      }}
    />

    <div style={{ marginTop: 7 * 8 }}>{story()}</div>
  </div>
));

setOptions({
  name: 'REACT-DATES',
  url: 'https://github.com/airbnb/react-dates',
});

function loadStories() {
  require('../stories/DateRangePicker');
}

setAddon(infoAddon);

configure(loadStories, module);
