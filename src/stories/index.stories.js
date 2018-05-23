import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import ButtonProgressBar from '../lib/components/ButtonProgressBar'

export default ButtonProgressBar

storiesOf('Button/ProgressBar', module)
    .add('default state', () =>
         <ButtonProgressBar>
             Save Changes
         </ButtonProgressBar>
    )
    .add('loading state', () =>
         <ButtonProgressBar state='loading'>
             Save Changes
         </ButtonProgressBar>

    )
    .add('loading completed', () =>
         <ButtonProgressBar state='finished'>
             Save Changes
         </ButtonProgressBar>
    )
    .add('example clickable', withState({ btnState: '' })(({ store }) => (
        <ButtonProgressBar
            state={store.state.btnState}
            onClick={() => {
                    store.set({ btnState: 'loading' })
                    setTimeout(() => {
                        store.set({ btnState: 'finished'})
                    }, 3000)
                }}>
            Save Changes
        </ButtonProgressBar>
    )))
