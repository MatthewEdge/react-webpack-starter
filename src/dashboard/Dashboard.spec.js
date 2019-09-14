import React from 'react'
import { configure, shallow }  from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'

// Component
import Dashboard from './Dashboard'

configure({ adapter: new Adapter() })

const wrapper = shallow(<Dashboard />)

describe('<Dashboard />', () => {
  it('should render without exploding', () => {
    expect(wrapper).to.have.lengthOf(1)
  })
})
