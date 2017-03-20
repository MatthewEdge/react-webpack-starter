/* eslint-env mocha */

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

// Component
import Header from './Header'

const wrapper = shallow(<Header />);

describe('<Header />', () => {
  it('should render without exploding', () => {
    expect(wrapper).to.have.lengthOf(1)
  })
})
