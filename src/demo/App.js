import React, { Component } from 'react'
import { injectGlobal } from 'styled-components';
import ButtonProgressBar from './ButtonProgressBar'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Heebo:400,600');
  button span {
    font-family: 'Heebo', sans-serif;
    font-weight: 600;
  }
`

export default () => (
    <div>
        <ButtonProgressBar />
    </div>
)
