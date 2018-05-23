import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import ButtonProgressBar from '../lib/components/ButtonProgressBar'

const handleClick = (store) => {
    store.set({ btnState: 'loading' })
    setTimeout(() => {
        store.set({ btnState: 'finished'})
        setTimeout(() => store.set({ btnState: ''}), 3000)
    }, 3000)
}

storiesOf('Buttons/ProgressBar', module)
    .add('default', withState({ btnState: '' })(({ store }) => (
        <ButtonProgressBar
            state={store.state.btnState}
            onClick={() => handleClick(store)}>
            Save Changes
        </ButtonProgressBar>
    )))
    .add('default with text', withState({ btnState: '' })(({ store }) => (
        <ButtonProgressBar
            textWhileLoading='Saving'
            textWhenLoaded ='Saved'
            state={store.state.btnState}
            onClick={() => handleClick(store)}>
            Save Changes
        </ButtonProgressBar>
    )))
    .add('loading', () =>
         <ButtonProgressBar state='loading'>
             Save Changes
         </ButtonProgressBar>

    )
    .add('loading with text', () =>
         <ButtonProgressBar state='loading' textWhileLoading='Saving'>
             Save Changes
         </ButtonProgressBar>

    )
    .add('completed', () =>
         <ButtonProgressBar state='finished'>
             Save Changes
         </ButtonProgressBar>
    )
    .add('completed with text', () =>
         <ButtonProgressBar state='finished' textWhenLoaded='Saved'>
             Save Changes
         </ButtonProgressBar>
    )
