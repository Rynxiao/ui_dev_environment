import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import TextButtonReadme from '../components/Button/with_text.md';
import EmojiButtonReadme from '../components/Button/with_some_emoji.md';

storiesOf('Introduction/Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />, {
  notes: 'Button Test',
});

storiesOf('Introduction/Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>, {
    readme: {
      // Show readme before story
      content: TextButtonReadme,
      // Show readme at the addons panel
      sidebar: TextButtonReadme,
    },
  })
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ), {
    readme: {
      content: EmojiButtonReadme,
      sidebar: EmojiButtonReadme,
    },
  });
