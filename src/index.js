import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from './select'

export default class CityPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      province: '',
      city: '',
      district: '',
    }
  }
  
  componentDidMount() {
    const { value } = this.props
    const { selectedProvince, selectedCity, selectedDistrict } = this.props
    this.setState({
      province: selectedProvince,
      city: selectedCity,
      district: selectedDistrict,
    })
  }
  
  handleOptionChange = (e) => {
    const { onOptionChange } = this.props
    this.setState({
      [e.target.name]: e.target.value,
    })
    if(e.target.name === 'province') {
      this.setState({
        city: '',
        district: ''
      })
    }
    if(e.target.name === 'city') {
      this.setState({
        district: ''
      })
    }
    setTimeout(()=>onOptionChange && onOptionChange(this.state), 0)
  }
  
  render() {
    const { source, onOptionChange, selectedProvince, selectedCity, selectedDistrict, noDistrict, ...props } = this.props
    const { province, city, district } = this.state
    const provinces = Object.keys(source['86']).map(item => ({code: item, value: source['86'][item]}))
    const cities = province ? Object.keys(source[province] || {}).map(item => ({code: item, value: source[province][item]})) : []
    const districts = city ? Object.keys(source[city] || {}).map(item => ({code: item, value: source[city][item]})) : []
    return (
      <div {...props}>
        <Select name="province" value={province} handleChange={this.handleOptionChange} options={provinces} />
        {source[province] &&
          <Select name="city" value={city} handleChange={this.handleOptionChange} options={cities} />
        }
        {source[city] && !noDistrict &&
          <Select name="district" value={district} handleChange={this.handleOptionChange} options={districts} />
        }
      </div>
    )
  }
}

CityPicker.propTypes = {
  source: PropTypes.object,
  selectedProvince: PropTypes.string,
  selectedCity: PropTypes.string,
  selectedDistrict: PropTypes.string,
  noDistrict: PropTypes.bool,
  onOptionChange: PropTypes.func,
}