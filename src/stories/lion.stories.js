import React from 'react'
import { storiesOf } from '@storybook/react'
import { withState } from '@dump247/storybook-state'
import { Lion } from '../lib'

const handleClick = store => {
  store.set({ btnState: 'loading' })
  setTimeout(() => {
    store.set({ btnState: 'finished' })
    setTimeout(() => store.set({ btnState: '' }), 3000)
  }, 3000)
}

storiesOf('Buttons/Lion', module)
  .add(
    'default',
    withState({ btnState: '' })(({ store }) => (
      <Lion state={store.state.btnState} onClick={() => handleClick(store)}>
        Save Changes
      </Lion>
    ))
  )
  .add(
    'default with text',
    withState({ btnState: '' })(({ store }) => (
      <Lion
        state={store.state.btnState}
        textWhileLoading='Saving'
        textWhenLoaded='Saved'
        onClick={() => handleClick(store)}
      >
        Save Changes
      </Lion>
    ))
  )
  .add('loading', () => <Lion state='loading'>Save Changes</Lion>)
  .add('loading with text', () => (
    <Lion state='loading' textWhileLoading='Saving'>
      Save Changes
    </Lion>
  ))
  .add('completed', () => <Lion state='finished'>Save Changes</Lion>)
  .add('completed with text', () => (
    <Lion state='finished' textWhenLoaded='Saved'>
      Save Changes
    </Lion>
  ))
