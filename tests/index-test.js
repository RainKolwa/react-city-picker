import expect from 'expect'
import React from 'react'
import {unmountComponentAtNode} from 'react-dom'
import {renderToStaticMarkup as render} from 'react-dom/server'

import CityPicker from 'src/'
const cityData = {
  "86": {
    "110000": "北京市",
    "120000": "天津市",
    "130000": "河北省"
  },
  "110000": {
    "110100": "市辖区"
  },
  "110100": {
    "110101": "东城区",
    "110102": "西城区",
    "110105": "朝阳区",
  }
}
describe('CityPicker Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('render at least one select', () => {
    expect(render(<CityPicker region={cityData} />))
      .toContain('<div><select name="province"><option selected="" value="" disabled="">请选择</option><option value="110000">北京市</option><option value="120000">天津市</option><option value="130000">河北省</option></select></div>')
  })
})
