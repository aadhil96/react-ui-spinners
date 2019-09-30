import React from 'react'
import { storiesOf } from '@storybook/react'
import { Ellipsis, Ring, Ripple } from '../src'

storiesOf('Button', module)
  .add('Ellipsis ', () => <Ellipsis />)
  .add('Ring ', () => <Ring />)
  .add('Ripple ', () => <Ripple />)
