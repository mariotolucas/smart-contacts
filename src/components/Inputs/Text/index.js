import React from 'react'
import PropTypes from 'prop-types'
import { CustomInput } from './InputStyled'

const Input = ({ value, onChange, placeholder }) => {
  return (
    <CustomInput
      value={value}
      type='text'
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default Input
