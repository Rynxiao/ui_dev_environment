import React from 'react'
import { Library, Example } from '@compositor/kit'
import { Button } from '../src/components/Button'

export default props =>
  <Library>
    <Example name='Button'>
      <Button onClick={() => console.log('text')}>Button</Button>
      <Button onClick={() => console.log('emoji')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    </Example>
  </Library>
