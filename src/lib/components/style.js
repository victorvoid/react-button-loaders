import styled, { keyframes } from 'styled-components'
import config from './config'
const { prefixCls } = config

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const scaleFinished = keyframes`
	0%   { transform: scale(10) }
	50%  { transform: scale(0.2) }
	70%  { transform: scale(1.2) }
	90%  { transform: scale(0.7) }
	100% { transform: scale(1) }
`

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
  font-weight: 300;
  text-transform: uppercase;
  overflow: hidden;
  outline: none;
  #icon-refresh {
    fill: #fff;
    width: 20px;
  }
  #icon-check {
    stroke: #FFF
    width: 24px;
    height: 24px;
  }
  &:before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #54d98c;
  }
  span {
    position: absolute;
    line-height: 0;

    &:nth-of-type(1) {
      top: 50%;
      transform: translateY(-50%);
    }

    &:nth-of-type(2) {
      top: 100%;
      transform: translateY(0%);
    }

    &:nth-of-type(3) {
      display: none;
    }
  }
  &.${prefixCls}__loading {
    background-color: #2ecc71;

    &:before {
      width: 100%;
      transition: width 3s linear;
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
          animation: ${rotate360} 500ms linear infinite;
        }
      }

      &:nth-of-type(3) {
        display: none;
      }
    }
  }
  &.${prefixCls}__finished {
    background-color: #54d98c;

    .${prefixCls}__text, .${prefixCls}__loading {
      display: none;
    }

    .${prefixCls}__check {
      display: block !important;
      animation: ${scaleFinished} 0.5s linear;
    }
  }
`
