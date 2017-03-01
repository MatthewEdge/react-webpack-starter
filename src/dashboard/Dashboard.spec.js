/* eslint-env mocha */

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

// Component
import Dashboard from './Dashboard'

const wrapper = shallow(<Dashboard />);

describe('<Dashboard />', () => {
  it('should render without exploding', () => {
    expect(wrapper).to.have.lengthOf(1)
  })
})
