import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import { Rabbit } from '../lib'

const handleClick = (store) => {
    store.set({ btnState: 'loading' })
    setTimeout(() => {
        store.set({ btnState: 'finished'})
        setTimeout(() => store.set({ btnState: ''}), 3000)
    }, 3000)
}

storiesOf('Buttons/Rabbit', module)
    .add('default', withState({ btnState: '' })(({ store }) => (
        <Rabbit
            state={store.state.btnState}
            onClick={() => handleClick(store)}>
            Save Changes
        </Rabbit>
    )))
    .add('default with text', withState({ btnState: '' })(({ store }) => (
        <Rabbit
            textWhileLoading='Saving'
            textWhenLoaded ='Saved'
            state={store.state.btnState}
            onClick={() => handleClick(store)}>
            Save Changes
        </Rabbit>
    )))
    .add('loading', () =>
         <Rabbit state='loading'>
             Save Changes
         </Rabbit>

    )
    .add('loading with text', () =>
         <Rabbit state='loading' textWhileLoading='Saving'>
             Save Changes
         </Rabbit>

    )
    .add('completed', () =>
         <Rabbit state='finished'>
             Save Changes
         </Rabbit>
    )
    .add('completed with text', () =>
         <Rabbit state='finished' textWhenLoaded='Saved'>
             Save Changes
         </Rabbit>
    )
