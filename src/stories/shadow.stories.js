import React from 'react'
import { storiesOf } from '@storybook/react'
import { withState } from '@dump247/storybook-state'
import { Shadow } from '../lib/components/Shadow'

const handleClick = store => {
  store.set({ withShadown: true })
  setTimeout(() => store.set({ withShadown: false }), 3000)
}

storiesOf('Buttons/Shadow', module)
  .add('default', () => (
    <Shadow>Hello Button</Shadow>
  ))
  .add(
    'with animation shadown', 
    withState({ withShadown: false })(({ store }) => (
      <Shadow 
        state={store.state.withShadown}
        className={store.state.withShadown && '-active'} 
        onClick={() => handleClick(store)}>
        Active Shadow
      </Shadow>
    ))
  )
