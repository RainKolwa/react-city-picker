import React, {Component} from 'react'
import {render} from 'react-dom'

import CityPicker from '../../src'
import data from '../../node_modules/china-area-data/data'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      province: '650000',
      city: '650400',
      district: '650421',
    }
  }
  
  handleChange = (value) => {
    console.log(value)
  }
  
  render() {
    const { province, city, district } = this.state
    return (
      <div>
        <h1>demo</h1>
        <p>默认:</p>
        <CityPicker
          source={data}
          onOptionChange={this.handleChange} />
        <p>有初始值:</p>
        <CityPicker
          source={data}
          selectedProvince={province}
          selectedCity={city}
          selectedDistrict={district}
          onOptionChange={this.handleChange} />
        <p>二级联动:</p>
        <CityPicker
          source={data}
          noDistrict
          onOptionChange={this.handleChange} />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
