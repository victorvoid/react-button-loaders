import React from 'react'
import classNames from 'classnames'
import config from '../../config.js'
const { prefixCls } = config
import {
  ButtonStyled,
  Text,
  Loading,
  Success,
  RefreshIcon,
  CheckIcon
} from './style'

const ButtonProgressBar = ({
  children,
  className,
  state,
  refreshComponent,
  checkComponent,
  ...props
}) => {
  const classNameJoined = classNames(className, `${prefixCls}__btn`, {
    [`${prefixCls}__loading`]: state === 'loading',
    [`${prefixCls}__finished`]: state === 'finished'
  })
  return (
    <ButtonStyled {...props} className={classNameJoined}>
      <Text>{children}</Text>
      <Loading>{refreshComponent}</Loading>
      <Success>{checkComponent}</Success>
    </ButtonStyled>
  )
}

ButtonProgressBar.defaultProps = {
  className: '',
  speedProgress: 3000,
  speedIconLoader: 800,
  refreshComponent: <RefreshIcon />,
  checkComponent: <CheckIcon />,
  onClick: () => {},
  onFinished: () => {}
}

export default ButtonProgressBar
