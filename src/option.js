import React from 'react'
import PropTypes from 'prop-types'

const Option = ({ option }) => {
  return <option value={option.code}>{option.value}</option>
}

Option.propTypes = {
  option: PropTypes.object
}

export default Option