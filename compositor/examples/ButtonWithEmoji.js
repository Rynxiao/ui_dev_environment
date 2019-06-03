import React from 'react'
import Button from '../src/components/Button';

export default () => (
  <Button onClick={() => console.log('emoji')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
