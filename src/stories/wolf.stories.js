import React from 'react'
import { storiesOf } from '@storybook/react'
import { withState } from '@dump247/storybook-state'
import { Wolf } from '../lib/components/Wolf'

const handleClick = store => {
  store.set({ withShadow: true })
  setTimeout(() => store.set({ withShadow: false }), 4000)
}

storiesOf('Buttons/Wolf', module)
  .add('default', () => (
    <Wolf>Hello Button</Wolf>
  ))
  .add(
    'with animation shadow', 
    withState({ withShadow: false })(({ store }) => (
      <Wolf 
        state={store.state.withShadow}
        className={store.state.withShadow && '-active'} 
        onClick={() => handleClick(store)}>
        Active Shadow
      </Wolf>
    ))
  )
