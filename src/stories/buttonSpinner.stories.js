import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import ButtonSpinner from '../lib/components/ButtonSpinner'

const handleClick = (store) => {
    store.set({ btnState: 'loading' })
    setTimeout(() => {
        store.set({ btnState: 'finished'})
        setTimeout(() => store.set({ btnState: ''}), 3000)
    }, 3000)
}

storiesOf('Buttons/Spinner', module)
    .add('default', withState({ btnState: '' })(({ store }) => (
        <ButtonSpinner
            state={store.state.btnState}
            onClick={() => handleClick(store)}>
            Save Changes
        </ButtonSpinner>
    )))
    .add('loading', () =>
         <ButtonSpinner state='loading'>
             Save Changes
         </ButtonSpinner>
    )
    .add('completed', () =>
         <ButtonSpinner state='finished'>
             Save Changes
         </ButtonSpinner>
    )
    .add('completed with text', () =>
         <ButtonSpinner state='finished' textWhenLoaded='Saved'>
             Save Changes
         </ButtonSpinner>
    )
