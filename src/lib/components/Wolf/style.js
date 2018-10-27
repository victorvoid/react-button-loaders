import styled, { keyframes } from 'styled-components'

const shadowpulse = keyframes`
  0% { box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.1); }
  100% { box-shadow: 0 0 0 20px rgba(0, 0, 0, 0); }
`

export const Button = styled.button`
  cursor: pointer;
  margin: 80px;
  padding: 24px 0px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  text-align: center;
  background: #F06189;
  border-radius: 4px;
  white-space: nowrap;
  width: 200px;
  &.-active {
    animation:  ${shadowpulse} 1s infinite;
  }
`