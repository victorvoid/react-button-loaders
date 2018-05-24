import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import { Beetle } from '../lib'

const handleClick = (store) => {
    store.set({ btnState: 'loading' })
    setTimeout(() => {
        store.set({ btnState: 'finished'})
        setTimeout(() => store.set({ btnState: ''}), 3000)
    }, 3000)
}

storiesOf('Buttons/Beetle', module)
    .add('default', withState({ btnState: '' })(({ store }) => (
        <Beetle
            state={store.state.btnState}
            onClick={() => handleClick(store)}>
            Save Changes
        </Beetle>
    )))
    .add('loading', () =>
         <Beetle state='loading'>
             Save Changes
         </Beetle>
    )
    .add('completed', () =>
         <Beetle state='finished'>
             Save Changes
         </Beetle>
    )
    .add('completed with text', () =>
         <Beetle state='finished' textWhenLoaded='Saved'>
             Save Changes
         </Beetle>
    )
