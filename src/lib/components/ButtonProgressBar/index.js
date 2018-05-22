import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
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
  textWhileLoading,
  textWhenLoaded,
  ...props
}) => {
  const classNameJoined = classNames(className, `${prefixCls}__btn`, {
    [`${prefixCls}__loading`]: state === 'loading',
    [`${prefixCls}__finished`]: state === 'finished'
  })
  return (
    <ButtonStyled {...props} className={classNameJoined}>
      <Text>{children}</Text>
      <Loading>
        {refreshComponent}
        <span>{textWhileLoading}</span>
      </Loading>
      <Success>
        {checkComponent}
        <span>{textWhenLoaded}</span>
      </Success>
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
  bgColor: '#fd5c63',
  bgLoading: '#3594ca',
  bgLoadingBehind: '#3785b0'
}

const { string, number, func } = PropTypes

ButtonProgressBar.propTypes = {
  textWhenLoaded: string,
  textWhileLoading: string,
  className: string,
  speedProgress: number,
  speedIconLoader: number,
  onClick: func,
  bgColor: string,
  bgLoading: string,
  bgLoadingBehind: string
}

export default ButtonProgressBar
