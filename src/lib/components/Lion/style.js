import React from 'react'
import styled, { keyframes } from 'styled-components'
import { IconRefresh, IconCheck } from '../Icons'
import {
  rotate360,
  progressBar,
  scaleFinished,
  toWidth100,
  toHeight100
} from '../../animations'

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

export const Effect = styled.span``

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
    top: 200%;
    transform: translateY(0%);
  }
  ${Success} {
    display: none;
  }
  &.${prefixCls}__loading {
    padding: 0;
    height: 20px;
    transform: translateY(15px);
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

      &:nth-of-type(3) {
          top: 50%;
      }
    }
  }
  &.${prefixCls}__finished {
    background: #FFF;
    &:before, &:after {
        content:"";
        width: 0;
        height: 2px;
        position: absolute;
        background: ${props => props.bgWhenFinish}
        left: initial;
        bottom: initial;
        transform: initial;
    }
    &:before {
        right: 0;
        top: 0;
    }
    &:after {
        left: 0;
        bottom: 0;
    }
    ${Effect}{
        &:before, &:after{
            content:"";
            width:2px;
            height:0;
            position: absolute;
            transition: all 0.1s linear;
            background: ${props => props.bgWhenFinish}
        }
        &:before {
            left: 0;
            top: 0;
        }
        &:after {
            right: 0;
            bottom: 0
        }
    }
    ${Success} {
        &:after {
            transition-delay: 0.2s;
        }
        &:before {
            transition-delay: 0.6s;
        }
    }
    &:before {
        animation: ${toWidth100} .1s linear;
        animation-fill-mode: forwards;
        animation-delay: .4s;
    }
    &:after {
        animation: ${toWidth100} .1s linear;
        animation-fill-mode: forwards;
        animation-delay: 0s;
    }
    ${Effect} {
        &:before {
            animation: ${toHeight100} .1s linear;
            animation-fill-mode: forwards;
            animation-delay: .6s;
        }
        &:after {
            animation: ${toHeight100} .1s linear;
            animation-fill-mode: forwards;
            animation-delay: .2s;
        }
    }
    ${Text}, ${Loading} {
      display: none;
    }
    ${Success} {
      display: flex !important;
      align-items: center;
      animation: ${scaleFinished} 0.5s linear;
      #icon-check {
        stroke: ${props => props.bgWhenFinish};
      }
      & > span {
        margin-left: 5px;
        font-size: 12px;
        color: ${props => props.bgWhenFinish};
      }
    }
  }
`
