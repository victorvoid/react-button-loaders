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
  CheckIcon,
  Effect
} from './style'

const Lion = ({
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
      <Effect />
      <Loading>
        <span>{textWhileLoading}</span>
      </Loading>
      <Success>
        {checkComponent}
        <span>{textWhenLoaded}</span>
      </Success>
    </ButtonStyled>
  )
}

Lion.defaultProps = {
  className: '',
  speedProgress: 3000,
  speedIconLoader: 800,
  refreshComponent: <RefreshIcon />,
  checkComponent: <CheckIcon />,
  onClick: () => {},
  bgColor: '#F06189',
  bgLoading: '#F06189',
  bgWhenFinish: '#4AD481',
  bgLoadingBehind: '#D7E3EF'
}

const { string, number, func } = PropTypes

Lion.propTypes = {
  textWhenLoaded: string,
  textWhileLoading: string,
  className: string,
  speedProgress: number,
  speedIconLoader: number,
  onClick: func,
  bgColor: string,
  bgLoading: string,
  bgLoadingBehind: string,
  bgWhenFinish: string
}

export default Lion
