import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Option from './option'

const Select = ({ name, value, handleChange, options }) => {
  return (
    <select name={name} value={value} onChange={handleChange}>
      <option value="" disabled>请选择</option>
      {options.map(item => <Option key={item.code} option={item} />)}
    </select>
  )
}

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  options: PropTypes.array,
}

export default Select