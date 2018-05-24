import { keyframes } from 'styled-components'

export const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const progressBar = keyframes`
  from { transform: translateX(-100%) }
  to { transform: translateX(0) }
`

export const scaleFinished = keyframes`
	0%   {
    transform: scale(10);
    opacity: 0
  }
	50%  {
    transform: scale(0.2)
  }
	70%  {
    transform: scale(1.2)
  }
	90%  {
    transform: scale(0.7)
  }
	100% {
    transform: scale(1);
    opacity: 1;
  }
`

export const toWidth100 = keyframes`
  from { width: 0; }
  to { width: 100%; }
`

export const toHeight100 = keyframes`
  from { height: 0; }
  to { height: 100%; }
`
