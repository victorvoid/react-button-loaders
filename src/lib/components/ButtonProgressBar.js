import React from 'react'
import classNames from 'classnames'
import config from './config.js'
const { prefixCls } = config
import { ButtonStyled } from './style'
import { IconRefresh, IconCheck } from './Icons'

const ButtonProgressBar = ({
  children,
  className,
  loading,
  finished,
  onClick,
  onFinished
}) => {
  const classNameJoined = classNames(className, `${prefixCls}__btn`, {
    [`${prefixCls}__loading`]: loading,
    [`${prefixCls}__finished`]: finished
  })

  return (
    <ButtonStyled
      {...this.props}
      className={classNameJoined}
      onClick={onClick}
      onTransitionEnd={onFinished}
    >
      <span className={`${prefixCls}__text`}>{children}</span>
      <span className={`${prefixCls}__loading`}>
        <IconRefresh />
      </span>
      <span className={`${prefixCls}__check`}>
        <IconCheck />
      </span>
    </ButtonStyled>
  )
}

ButtonProgressBar.defaultProps = {
  className: '',
  onClick: () => {},
  onFinished: () => {}
}

export default ButtonProgressBar
