import React from 'react'
import config from '../../../config.js'
const { prefixCls } = config
import Lion from '../index'
import { shallow } from 'enzyme'

describe('Lion component', () => {
  test('should render a the button', () => {
    const wrapper = shallow(<Lion />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should call mock function when button is clicked', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(<Lion onClick={handleClick} />)
    wrapper.simulate('click')
    expect(handleClick).toHaveBeenCalled()
  })

  test('should put class `__loading` when the state is loading ', () => {
    const wrapper = shallow(<Lion state='loading' />)
    expect(wrapper.find(`.${prefixCls}__loading`).length).toEqual(1)
  })

  test('should put class `__finished` when the state is finished ', () => {
    const wrapper = shallow(<Lion state='finished' />)
    expect(wrapper.find(`.${prefixCls}__finished`).length).toEqual(1)
  })
})
