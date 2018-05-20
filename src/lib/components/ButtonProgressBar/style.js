import React from 'react'
import styled, { keyframes } from 'styled-components'
import { IconRefresh, IconCheck } from '../Icons'
import config from '../../config'
const { prefixCls } = config

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const progressBar = keyframes`
  from { transform: translateX(-100%) }
  to { transform: translateX(0) }
`

const scaleFinished = keyframes`
	0%   { transform: scale(10) }
	50%  { transform: scale(0.2) }
	70%  { transform: scale(1.2) }
	90%  { transform: scale(0.7) }
	100% { transform: scale(1) }
`

export const Text = styled.span`
  font-size: 15px;
  font-weight: 300;
`
Text.displayName = 'Text'

export const Loading = styled.span``
Loading.displayName = 'Loading'

export const Success = styled.span``
Success.displayName = 'Success'

const RefreshStyled = styled.span`
  svg {
    fill: #fff;
    width: 20px;
  }
`

const CheckStyled = styled.span`
  svg {
    stroke: #FFF
    width: 24px;
    height: 24px;
  }
`

export const RefreshIcon = () => (
  <RefreshStyled>
    <IconRefresh />
  </RefreshStyled>
)

export const CheckIcon = () => (
  <CheckStyled>
    <IconCheck />
  </CheckStyled>
)

export const ButtonStyled = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 200px;
  padding: 24px 50px;
  background-color: #03a9f4;
  color: #fff;
  border: none;
  border-radius: 4px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  overflow: hidden;
  outline: none;
  &:before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    background-color: #54d98c;
  }
  ${Text}, ${Loading}, ${Success} {
    position: absolute;
    line-height: 0;
  }
  ${Text} {
    top: 50%;
    transform: translateY(-50%);
  }
  ${Loading} {
    top: 100%;
    transform: translateY(0%);
  }
  ${Success} {
    display: none;
  }

  &.${prefixCls}__loading {
    cursor: progress;
    pointer-events: none;
    background-color: #2ecc71;
    &:before {
      animation: ${progressBar} ${props => props.speedProgress}ms linear
        infinite;
    }

    span {
      &:nth-of-type(1) {
        top: -100%;
        transform: translateY(-50%);
      }

      &:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%);

        svg {
          animation: ${rotate360} ${props => props.speedIconLoader}ms linear
            infinite;
        }
      }

      &:nth-of-type(3) {
        display: none;
      }
    }
  }
  &.${prefixCls}__finished {
    background-color: #54d98c;
    pointer-events: none;
    ${Text}, ${Loading} {
      display: none;
    }

    ${Success} {
      display: block !important;
      animation: ${scaleFinished} 0.5s linear;
    }
  }
`
