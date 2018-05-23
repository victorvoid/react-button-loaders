import React from 'react'
import config from '../../../config.js'
const { prefixCls } = config
import ButtonSpinner from '../index'
import { shallow } from 'enzyme'

describe('ButtonSpinner component', () => {
  test('should render a the spinner button', () => {
    const wrapper = shallow(<ButtonSpinner />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should call mock function when button is clicked', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(<ButtonSpinner onClick={handleClick} />)
    wrapper.simulate('click')
    expect(handleClick).toHaveBeenCalled()
  })

  test('should put class `__loading` when the state is loading ', () => {
    const wrapper = shallow(<ButtonSpinner state='loading' />)
    expect(wrapper.find(`.${prefixCls}__loading`).length).toEqual(1)
  })

  test('should put class `__finished` when the state is finished ', () => {
    const wrapper = shallow(<ButtonSpinner state='finished' />)
    expect(wrapper.find(`.${prefixCls}__finished`).length).toEqual(1)
  })
})
