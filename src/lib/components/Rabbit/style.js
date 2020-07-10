import React from 'react'
import styled, { keyframes } from 'styled-components'
import { IconRefresh, IconCheck } from '../Icons'
import { rotate360, progressBar, scaleFinished } from '../../animations'

import config from '../../config'
const { prefixCls } = config

export const Text = styled.span`
  font-size: 15px;
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
  background-color: ${props => props.bgColor};
  color: #fff;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  overflow: hidden;
  outline: none;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 12px 24px 0 rgba(233, 92, 97, 0.2);
  }
  &:before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    background-color: ${props => props.bgLoading};
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
    background-color: ${props => props.bgLoadingBehind};
    &:before {
      animation: ${progressBar} ${props => props.speedProgress}ms linear
        infinite;
    }

    & > span {
      &:nth-of-type(1) {
        top: -100%;
        transform: translateY(-50%);
      }

      &:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        font-size: 12px;
        svg {
          animation: ${rotate360} ${props => props.speedIconLoader}ms linear
            infinite;
          margin-right: 5px;
        }
      }

      &:nth-of-type(3) {
        display: none;
      }
    }
  }
  &.${prefixCls}__finished {
    background-color: ${props => props.bgColor};
    pointer-events: none;
    ${Text}, ${Loading} {
      display: none;
    }

    ${Success} {
      display: flex !important;
      align-items: center;
      animation: ${scaleFinished} 0.5s linear;
      & > span {
        margin-left: 5px;
        font-size: 12px;
      }
    }
  }
`
