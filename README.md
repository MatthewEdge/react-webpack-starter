# React & Webpack Starter

Starter project for current React / Webpack / SCSS.
Testing using Mocha, Chai, and Enzyme

## Dependency Updates

Run `make` to run the dependency update, install, and audit process

## Running

```
npm install
npm start
```

## Testing

Testing is accomplished through Mocha, Chai, and Enzyme. At a bare minimum there should be at least
a unit test doing the following:

```javascript
import React from "react"
import { shallow } from "enzyme"
import MyComponent from "../src/my-component"

const wrapper = shallow(<MyComponent/>)

describe("MyComponent", () => {
  it("renders without exploding", () => {
    expect(wrapper).to.have.length(1)
  })
})
```
