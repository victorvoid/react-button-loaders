import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import config from '../../config.js'
const { prefixCls } = config
import { ButtonStyled, Text, Loading, Success, CheckIcon } from './style'

const ButtonSpinner = ({
  children,
  className,
  state,
  checkComponent,
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
      <Loading />
      <Success>
        {checkComponent}
        <span>{textWhenLoaded}</span>
      </Success>
    </ButtonStyled>
  )
}

ButtonSpinner.defaultProps = {
  className: '',
  speedProgress: 3000,
  speedIconLoader: 800,
  checkComponent: <CheckIcon />,
  onClick: () => {},
  bgColor: '#fd5c63',
  bgLoading: '#3594ca',
  bgLoadingBehind: '#3785b0'
}

const { string, number, func } = PropTypes

ButtonSpinner.propTypes = {
  textWhenLoaded: string,
  className: string,
  speedProgress: number,
  speedIconLoader: number,
  onClick: func,
  bgColor: string,
  bgLoading: string,
  bgLoadingBehind: string
}

export default ButtonSpinner
