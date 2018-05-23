import React from 'react'
import styled, { keyframes } from 'styled-components'
import { IconCheck } from '../Icons'
import { rotate360, scaleFinished } from '../../animations'
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

const CheckStyled = styled.span`
  svg {
    stroke: #FFF
    width: 24px;
    height: 24px;
  }
`

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
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 0 12px 24px 0 rgba(233, 92, 97, 0.2);
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
    display: block;
    width: 34px;
    height: 34px;
    position: absolute;
    left: calc(50% - 17px);
    background: transparent;
    box-sizing: border-box;
    border-top: 4px solid white;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-radius: 100%;
    animation: ${rotate360} 0.6s ease-out infinite;
  }
  ${Success} {
    display: none;
  }

  &.${prefixCls}__loading {
    width: 50px;
    transform: translateX(calc(100% + 22px));
    height: 50px;
    padding: 10px;
    border-radius: 50px;
    cursor: progress;
    pointer-events: none;
    & > span {
      &:nth-of-type(1) {
        top: -100%;
        transform: translateY(-50%);
      }

      &:nth-of-type(2) {
        top: initial;
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
